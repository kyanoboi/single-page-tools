import BaseTileLayer from "@arcgis/core/layers/BaseTileLayer.js";
import getTileInfo from "./GetTileInfo";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import Extent from '@arcgis/core/geometry/Extent'
import * as projection from '@arcgis/core/geometry/projection'

const TileWidth = 256

/**
 * 
 * 在线切片图层，基于：动态服务的 ExportMap 方法实现，可精确控制每个图层的样式，适用于快速发布服务测试
 * 
 * @param {object} param0 
 * @param {string} param0.url 图层URL，必传，服务必须带有 ExportMap 方法，
 * @param {4490 | 4326 | 3857 | 102000} param0.wkid 上图的参考系，必传，将依此创建切片方案
 * @param {__esri.TileInfo} param0.tileInfo 自定义切片方案，如非4490、3857、4326时用到
 * @param {object} param0.customParameters 其他传参
 * @param {"png" | "png8" | "png24" | "png32" | "jpg" | "pdf" | "bmp" | "gif" | "svg" | "pngjpg"} param0.imageFormat 返回的图片格式，默认按服务配置为准
 * @param {boolean} param0.imageTransparency 是否为透明图片，默认按服务配置为准
 * @param {number} param0.opacity 透明度
 * @param {boolean} param0.visible 是否可见
 * @param {number} param0.maxLodLevel 最大显示层级，默认为20
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
  url, wkid, customParameters = {},
  tileInfo: inputTileInfo,
  opacity = 1,
  visible = true,
  imageFormat,
  imageTransparency,
  blendMode,
  maxLodLevel = 20,
}) {

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
   * @type {BaseTileLayer}
   */
  return new BaseLayer({
    opacity,
    visible,
    blendMode,
    tileInfo: tileInfo,
    spatialReference: tileInfo.spatialReference,
  })
}