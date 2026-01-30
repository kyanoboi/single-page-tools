import getTileInfo from "./GetTileInfo";
import Extent from "@arcgis/core/geometry/Extent";
import LayerIndexManager from "./MapImageTileLayer/LayerIndexManager";
import MapImageTileLayerGlobalManager from "./MapImageTileLayer/MapImageTileLayerGlobalManager";

const TileWidth = 256
const GlobalManager = new MapImageTileLayerGlobalManager()

/**
 * 
 * 在线切片图层，基于：动态服务的 ExportMap 方法实现，可精确控制每个图层的样式，适用于快速发布服务测试
 * 
 * @param {object} param0 
 * @param {string} param0.id 图层Id
 * @param {string} param0.title 图层名称
 * @param {number} param0.minScale 显示的最小比例尺
 * @param {number} param0.maxScale 显示的最大比例尺
 * @param {string} param0.url 图层URL，必传，服务必须带有 ExportMap 方法，
 * @param {4490 | 4326 | 3857 | 102100} param0.wkid 上图的参考系，必传，将依此创建切片方案
 * @param {__esri.TileInfo} param0.tileInfo 自定义切片方案，如非4490、3857、4326时用到
 * @param {object} param0.customParameters 其他传参
 * @param {"png" | "png8" | "png24" | "png32" | "jpg" | "pdf" | "bmp" | "gif" | "svg" | "pngjpg"} param0.imageFormat 返回的图片格式，默认按服务配置为准
 * @param {boolean} param0.imageTransparency 是否为透明图片，默认按服务配置为准
 * @param {number} param0.opacity 透明度
 * @param {boolean} param0.visible 是否可见
 * @param {number} param0.maxLodLevel 最大显示层级，默认为20
 * @param {typeof __esri.MapImageLayer} param0.MapImageLayer 
 * @param {typeof __esri.BaseTileLayer} param0.BaseTileLayer 
 * @param {typeof __esri.FeatureLayer} param0.FeatureLayer 
 * @param {typeof __esri.GraphicsLayer} param0.GraphicsLayer 
 * @param {__esri.projection} param0.projection 
 * @param {boolean} param0.popupEnabled 是否开启点击弹窗
 * @param {"average" | "color-burn" | "color-dodge" | "color" | "darken" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "difference" | "exclusion" | "hard-light" | "hue" | "invert" | "lighten" | "lighter" | "luminosity" | "minus" | "multiply" | "normal" | "overlay" | "plus" | "reflect" | "saturation" | "screen" | "soft-light" | "source-atop" | "source-in" | "source-out" | "vivid-light" | "xor"} param0.blendMode 与底图的混合方式
 * @returns {__esri.TileLayer}
 * 
 * @example 
 * sceneView.map.add(MapImageTileLayer({
 *   url: 'https://server.geoscene.cn/server/rest/services/XXX/MapServer',
 *   wkid: 4490,
 * }))
 */
export default function MapImageTileLayer({
  id, title,
  minScale, maxScale,
  url,
  wkid,
  customParameters = {},
  tileInfo: inputTileInfo,
  opacity = 1,
  visible = true,
  imageFormat,
  imageTransparency,
  blendMode,
  maxLodLevel = 20,
  MapImageLayer,
  BaseTileLayer,
  FeatureLayer,
  GraphicsLayer,
  projection,
  popupEnabled = true,
}) {
  GlobalManager.cache.GraphicsLayer = GraphicsLayer

  const tileInfo = inputTileInfo || getTileInfo(wkid, maxLodLevel)

  const options = {
    url: url,
    customParameters: customParameters,
    dpi: 96,
  }

  if (imageFormat) options.imageFormat = imageFormat
  if (typeof imageTransparency === 'boolean') options.imageTransparency = imageTransparency

  const layer = new MapImageLayer(options)

  const BaseLayer = BaseTileLayer.createSubclass({
    isGeoScene: true,
    type_geoscene: 'map-image-tile',
    baseMapImageLayer: layer,
    load: function () {
      this.addResolvingPromise(layer.load().then(() => {
        const { fullExtent } = layer

        if (fullExtent?.spatialReference.wkid === wkid) {
          this.fullExtent = layer.fullExtent

          return Promise.resolve(true)
        } else {
          return projection.load()
        }
      }).then((isResolve) => {
        if (isResolve === true) return

        const outExtent = projection.project(layer.fullExtent, { wkid })
        this.fullExtent = outExtent
      }))

      return this
    },
    fetchTile: function (level, row, col, options) {

      /** @type {AbortSignal} */
      const signal = options && options.signal

      const [xmin, ymin, xmax, ymax] = this.getTileBounds(level, row, col)

      return layer.fetchImage(new Extent({
        xmin, ymin, xmax, ymax,
        spatialReference: this.spatialReference
      }), TileWidth, TileWidth, {
        signal: signal
      })
    },
  })

  /**
   * @type {__esri.BaseTileLayer}
   */
  const outLayer = new BaseLayer({
    id,
    title,
    opacity,
    visible,
    blendMode,
    minScale,
    maxScale,
    popupEnabled,
    customParameters,
    tileInfo: tileInfo,
    spatialReference: tileInfo.spatialReference,
  })

  outLayer.watch('popupEnabled', function () {
    if (!manager.isAdded) return
    if (outLayer.popupEnabled) createPopupLayer(manager.view)
    else GlobalManager.clearHandleByLayer(manager)
  })

  outLayer.watch('customParameters', function () {
    manager.setCustomParameters(outLayer.customParameters)
  })

  outLayer.on('layerview-create', function ({ view }) {
    if (!outLayer.popupEnabled) return
    createPopupLayer(view)
  })

  outLayer.on('layerview-destroy', function () {
    if (!outLayer.popupEnabled) return
    GlobalManager.clearHandleByLayer(manager)
  })

  const manager = new LayerIndexManager(layer, outLayer, {
    FeatureLayer,
    GraphicsLayer,
    customParameters,
  })

  /**
   * @param {__esri.SceneView} view 
   */
  function createPopupLayer(view) {
    if (manager.isAdded) return

    manager.setView(view)

    GlobalManager.addNewLayer(manager)
  }

  return outLayer
}
