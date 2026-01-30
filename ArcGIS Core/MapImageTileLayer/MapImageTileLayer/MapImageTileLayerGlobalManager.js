import Extent from '@arcgis/core/geometry/Extent'
import Polygon from '@arcgis/core/geometry/Polygon'
import Graphic from '@arcgis/core/Graphic'
import { PointSymbol, PolygonSymbol, PolylineSymbol } from './HighlightFeatureSymbol'

var baseSeed = 1

export default class MapImageTileLayerGlobalManager {

  constructor() {

    /**
     * @type {Map.<__esri.SceneView, {
     *  handle: __esri.Handle,
     *  queryLayerManagers: Array<LayerIndexManager>,
     *  graphicsLayer: __esri.GraphicsLayer,
     * }>}
     */
    this.clickHandleIndex = new Map()

    /**
     * @type {Map.<__esri.SceneView, __esri.Handle>}
     */
    this.clearPopupHandleIndex = new Map()

    this.cache = {
      /**
       * @type {typeof __esri.GraphicsLayer}
       */
      GraphicsLayer: undefined,
    }
  }

  /**
   * 
   * @param {import('./LayerIndexManager').default} manager 
   */
  clearHandleByLayer(manager) {
    const { view } = manager

    const clickHandle = this.clickHandleIndex.get(view)
    if (clickHandle) {

      if (clickHandle.queryLayerManagers.includes(manager)) {
        const index = clickHandle.queryLayerManagers.indexOf(manager)
        clickHandle.queryLayerManagers.splice(index, 1)
      }

      if (clickHandle.queryLayerManagers.length < 1) {
        view.map.remove(clickHandle.graphicsLayer)
        clickHandle.handle.remove()
        this.clickHandleIndex.delete(view)
      }
    }

    manager.removeFromView()
  }

  /**
   * 
   * @param {import('./LayerIndexManager').default} manager 
   */
  addNewLayer(manager) {
    const { view } = manager

    if (this.clickHandleIndex.has(view)) {
      const managers = this.clickHandleIndex.get(view).queryLayerManagers

      if (!managers.includes(manager)) {
        managers.push(manager)
      }

      return
    }

    const _this = this
    const handle = view.on('click', function (event) {

      const point = view.toMap(event)
      if (!point) return

      const managers = _this.clickHandleIndex
        .get(view)?.queryLayerManagers
        .filter(e => e.tileLayer.fullExtent?.contains(point))

      if (!managers || managers.length < 1) return

      const seed = baseSeed = baseSeed + 1

      view.openPopup({
        location: point,
        promises: [new Promise((res, rej) => {

          Promise
            .all(managers.map(e => e.initFeatureLayers()))
            .then(() => {
              if (!Boolean(view) || seed !== baseSeed) return //rej()

              /**
               * @type {Array<__esri.FeatureLayer>}
               */
              var feaLayers = []
              for (var i = 0, ii = managers.length; i < ii; i++) {
                const { featureLayers, layerIds } = managers[i]

                switch (managers[i].commnd) {
                  case 'show':
                    feaLayers.push(...featureLayers.filter(e => layerIds.includes(e.layerId)))
                    break
                  case 'hide':
                    feaLayers.push(...featureLayers.filter(e => !layerIds.includes(e.layerId)))
                    break
                  case 'include':
                    feaLayers.push(...featureLayers.filter(e => e.visible || layerIds.includes(e.layerId)))
                    break
                  case 'exclude':
                    feaLayers.push(...featureLayers.filter(e => e.visible && !layerIds.includes(e.layerId)))
                    break
                  case 'default':
                    feaLayers.push(...featureLayers.filter(e => e.visible))
                    break
                }

              }

              if (feaLayers.length < 1) return rej()

              const resolution = (view.resolution || (
                point.spatialReference.isGeographic
                  ? 0.0001
                  : 10
              )) * 10

              return Promise.all(feaLayers.map(e => e.queryFeatures({
                where: '1=1',
                outFields: ['*'],
                returnGeometry: true,
                geometry: Polygon.fromExtent(new Extent({
                  xmin: point.x - resolution,
                  xmax: point.x + resolution,
                  ymin: point.y - resolution,
                  ymax: point.y + resolution,
                  spatialReference: point.spatialReference,
                })),
                num: 6,
              })))
            })
            .then(result => {
              const feas = result?.flatMap(e => e.features || []) || []

              if (feas.length < 1) return rej()

              const outFeas = feas.map(e => {
                const graphic = new Graphic({
                  layer: e.layer,
                  geometry: e.geometry,
                  symbol: e.geometry.type === 'point'
                    ? PointSymbol
                    : e.geometry.type === 'polyline'
                      ? PolylineSymbol
                      : PolygonSymbol,
                  attributes: e.attributes,
                  popupTemplate: e.layer.popupTemplate || e.layer.defaultPopupTemplate
                })

                /**
                 * @type {__esri.FeatureLayer}
                 */
                const layer = e.layer
                if (layer.type === 'feature') {
                  const { attributes } = graphic

                  for (var i = 0, il = Object.keys(attributes), ii = il.length; i < ii; i++) {
                    const field = layer.fieldsIndex.get(il[i])
                    if (!Boolean(field)) continue

                    const value = attributes[il[i]]
                    if (field.domain) {
                      switch (field.domain.type) {

                        case "coded-value":
                          const code = field.domain.codedValues.find((e => e.code === value))
                          if (code?.name) {
                            attributes[il[i]] = code.name
                          }
                          break

                        case "range":
                          if (value < field.domain.minValue) {
                            attributes[il[i]] = field.domain.minValue
                          } else if (value > field.domain.maxValue) {
                            attributes[il[i]] = field.domain.maxValue
                          }
                          break

                        case "inherited":

                          break
                      }
                    }
                  }

                }

                return graphic
              })
              graphicsLayer.removeAll()
              graphicsLayer.addMany(outFeas)

              rej()

              view.openPopup({
                location: point,
                features: outFeas,
              }).then(() => {
                var removeHandle = _this.clearPopupHandleIndex.get(view)
                if (removeHandle) {
                  removeHandle.remove()
                  _this.clearPopupHandleIndex.delete(view)
                }

                if (!view.popup) return

                _this.clearPopupHandleIndex.set(view, removeHandle)
                removeHandle = view.popup.watch('visible', function (visible) {
                  if (visible) return

                  graphicsLayer.removeAll()
                  removeHandle.remove()
                  _this.clearPopupHandleIndex.delete(view)
                })
              })
            })

        })],
      })

    })

    const graphicsLayer = new this.cache.GraphicsLayer({
      elevationInfo: { mode: 'on-the-ground' },
    })

    this.clickHandleIndex.set(manager.view, {
      handle: handle,
      queryLayerManagers: [manager],
      graphicsLayer: graphicsLayer,
    })

    view.map.add(graphicsLayer)
  }
}