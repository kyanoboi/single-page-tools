import TileInfo from "@arcgis/core/layers/support/TileInfo.js";
import SpatialReference from "@arcgis/core/geometry/SpatialReference.js";

/**
 * 
 * @param {4490 | 4326 | 3857 | 102100} wkid 
 * @param {number} maxLevel 
 */
export default function getTileInfo(wkid, maxLevel = 17) {

  switch (wkid) {
    case 4490:
      return new TileInfo({
        size: [256, 256],
        dpi: 96,
        compressionQuality: 0,
        origin: {
          type: 'point',
          x: -180,
          y: 90,
          spatialReference: { wkid: 4490 }
        },
        spatialReference: { wkid: 4490 },
        lods: new Array(maxLevel + 1).fill(0).map((e, i) => ({
          level: i,
          resolution: Math.pow(0.5, i) * 0.703125,
          scale: Math.pow(0.5, i) * 295828763.79585469
        }))
      })
    case 4326:
      return new TileInfo({
        size: [256, 256],
        dpi: 96,
        compressionQuality: 0,
        origin: {
          type: 'point',
          x: -180,
          y: 90,
          spatialReference: SpatialReference.WGS84
        },
        spatialReference: SpatialReference.WGS84,
        lods: new Array(maxLevel + 1).fill(0).map((e, i) => ({
          level: i,
          resolution: Math.pow(0.5, i) * 0.703125,
          scale: Math.pow(0.5, i) * 295829355.454566
        })
        )
      })
    case 3857:
    case 102100:
      return new TileInfo({
        size: [256, 256],
        dpi: 96,
        compressionQuality: 0,
        origin: {
          type: 'point',
          x: -20037508.342787,
          y: 20037508.342787,
          spatialReference: SpatialReference.WebMercator
        },
        spatialReference: SpatialReference.WebMercator,
        lods: new Array(maxLevel + 1).fill(0).map((e, i) => ({
          level: i,
          resolution: Math.pow(0.5, i) * 156543.03392800014,
          scale: Math.pow(0.5, i) * 591657527.591555
        }))
      })
  }
}