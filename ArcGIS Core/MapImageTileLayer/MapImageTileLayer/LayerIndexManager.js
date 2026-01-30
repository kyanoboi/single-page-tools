
export default class LayerIndexManager {

  /**
   * 
   * @param {__esri.MapImageLayer} baseMapServerLayer 
   * @param {__esri.BaseTileLayer} tileLayer 
   * @param {object} param1 
   * @param {typeof __esri.FeatureLayer} param1.FeatureLayer 
   * @param {typeof __esri.GraphicsLayer} param1.GraphicsLayer 
   * @param {object} param1.customParameters 
   */
  constructor(baseMapServerLayer, tileLayer, {
    FeatureLayer,
    GraphicsLayer,
    customParameters,
  }) {

    this.layer = baseMapServerLayer

    this.tileLayer = tileLayer

    this.isAdded = false

    this.isFeatureLayerInited = false

    /**
     * @type {__esri.SceneView}
     */
    this.view

    /**
     * @type {Array<__esri.FeatureLayer>}
     */
    this.featureLayers = []

    /**
     * @type {__esri.GraphicsLayer}
     */
    this.graphicsLayer = undefined

    /**
     * @type {__esri.GraphicsLayerView}
     */
    this.graphicsLayerView = undefined

    this.cache = { FeatureLayer, GraphicsLayer }

    this.layerIds = []
    /** 
     * @type {'show' | 'hide' | 'include' | 'exclude' | 'default'}
    */
    this.commnd = null

    this.setCustomParameters(customParameters)
  }

  initFeatureLayers() {
    if (this.isFeatureLayerInited) return Promise.resolve()

    /**
     * @type {Array<__esri.FeatureLayer>}
     */
    var baseFeaLayers = []

    return this.layer
      .loadAll()
      .then(() => {

        baseFeaLayers = this.layer.allSublayers
          .filter(layer =>
            layer.popupEnabled &&
            ['point', 'polyline', 'polygon'].includes(layer.geometryType) &&
            'query' in layer.capabilities
          )
          .toArray()

        this.featureLayers = baseFeaLayers
          .map(layer => new this.cache.FeatureLayer({
            url: layer.url,
            title: this.tileLayer.title,
            fields: layer.fields,
            fullExtent: layer.fullExtent,
            popupTemplate: layer.popupTemplate,
            labelingInfo: undefined,
            renderer: undefined,
          }))

        return Promise.all(this.featureLayers.map(e => e.load()))

      })
      .then(() => {
        this.featureLayers.map((e, i) => e.fields = baseFeaLayers[i].fields)
        this.isFeatureLayerInited = true
        return
      })
  }

  /**
   * @param {__esri.SceneView} view 
   */
  setView(view) {
    this.isAdded = true
    this.view = view
  }

  removeFromView() {
    this.isAdded = false
    this.view = undefined
    this.isFeatureLayerInited = false
    this.featureLayers.map(e => e.destroy())
    this.featureLayers = []
  }

  /**
   * @param {object} customParameters 
   */
  setCustomParameters(customParameters) {
    if (
      !customParameters ||
      !customParameters.layers ||
      typeof customParameters.layers !== 'string'
    ) return this.commnd = 'default'

    this.layerIds = []

    /**
     * @type {string}
     */
    const layers = (customParameters.layers || '').replaceAll(' ', '')

    this.commnd = layers.substring(0, layers.indexOf(':'))

    this.layerIds = layers
      .substring(layers.indexOf(':') + 1)
      .split(',')
      .map(e => +e)
      .filter(e => typeof e === 'number' && e >= 0)
  }
}