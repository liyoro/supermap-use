// import { mapGetters } from 'vuex'
// import axios from 'axios'
// import { findElem } from '@/utils/index'

// const getMapJson = (url) => {
//   return axios.get(`data/map/${url}.json`)
// }
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import * as control from 'ol/control'
// , Tianditu, BaiduMap
import { Logo, TileSuperMapRest } from '@supermap/iclient-ol'
// import Projection from 'ol/proj/Projection'
// import { addProjection } from 'ol/proj'
import ScaleLine from 'ol/control/ScaleLine'
// import VectorTile from 'ol/layer/VectorTile'
// import { VectorTileStyles } from '@supermap/iclient-ol'
// import { MapService } from '@supermap/iclient-ol'
// import { VectorTileSuperMapRest } from '@supermap/iclient-ol'

export default {
  name: 'CenterView',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      map: null,
      // 超图图层 EPSG:4326
      url1: 'https://iserver.supermap.io/iserver/services/map-world/rest/maps/World',
      url2: 'https://www.supermapol.com/proxy/iserver/services/map_chongqing_qy6yrsa0/rest/maps/ChongQing1',
      url3: 'https://www.supermapol.com/proxy/v53t6r7x/iserver/services/map-gebco-wms/rest/maps/WMS%20for%20the%20GEBCO%20global%20bathymetric%20grid',
      // EPSG:3857
      China_Dark: 'https://maptiles.supermapol.com/iserver/services/map_China/rest/maps/China_Dark',
      // EPSG:3857
      China_Light: 'https://maptiles.supermapol.com/iserver/services/map_China/rest/maps/China_Light',
      // 京津地区土地利用现状图 EPSG:3857
      mapService: 'https://www.supermapol.com/proxy/iserver/services/map_jingjin_62mzqg3d/rest/maps/%E4%BA%AC%E6%B4%A5%E5%9C%B0%E5%8C%BA%E5%9C%9F%E5%9C%B0%E5%88%A9%E7%94%A8%E7%8E%B0%E7%8A%B6%E5%9B%BE?prjCoordSys=%7B%22epsgCode%22:3857%7D'
      // mapOptions: {
      //   container: 'map', // container id
      //   style: {
      //     version: 8,
      //     sources: {
      //       'raster-tiles': {
      //         type: 'raster',
      //         tiles: [
      //           'https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'
      //         ],
      //         tileSize: 256
      //       }
      //     },
      //     layers: [
      //       {
      //         id: 'simple-tiles',
      //         type: 'raster',
      //         source: 'raster-tiles',
      //         minzoom: 0,
      //         maxzoom: 22
      //       }
      //     ]
      //   },
      //   center: [120.143, 30.236], // starting position
      //   zoom: 3 // starting zoom
      // }
    }
  },
  computed: {
  },
  mounted() {
    // this.initData3()
  },
  created() {
  },
  updated() {},
  methods: {
    initData() {
      // 初始化地图信息
      var map = new ol.Map({
        target: 'map',
        controls: ol.control
          .defaults({ attributionOptions: { collapsed: false }})
          .extend([new ol.supermap.control.Logo()]),
        view: new ol.View({
          center: [0, 0],
          zoom: 2,
          projection: 'EPSG:4326'
        })
      })
      // 添加图层
      var layer = new ol.layer.Tile({
        source: new ol.source.TileSuperMapRest({
          url: this.url3,
          wrapX: true
        }),
        projection: 'EPSG:4326'
      })
      map.addLayer(layer)
    },
    // 加载2D超图
    initData2() {
      // 设置自定义投影参数(未实现)
      // const swissProjection = new Projection({
      //   code: 'EPSG:21781',
      //   // extent用于确定缩放级别
      //   // 投影的extent可以参考https://epsg.io/
      //   extent: [485869.5728, 76443.1884, 837076.5648, 299941.7864],
      //   units: 'm'
      // })
      // addProjection(swissProjection)
      this.map = new Map({
        target: 'map',
        controls: control.defaults({ attributionOptions: { collapsed: false }}).extend([new Logo()]),
        view: new View({
          // center: [12957388, 4853991],
          // center: [116.402, 39.905],  // url1
          center: [107.8, 30], // url2
          // maxZoom: 18,
          // minZoom: 2,
          zoom: 8,
          projection: 'EPSG:4326'
          // projection: swissProjection
        })
        // 添加天地图图层
        // layers: [
        //   new TileLayer({
        //     source: new Tianditu({
        //       layerType: 'ter',
        //       key: '1d109683f4d84198e37a38c442d68311',
        //       projection: 'EPSG:4326'
        //     })
        //   }),
        //   new TileLayer({
        //     source: new Tianditu({
        //       layerType: 'ter',
        //       key: '1d109683f4d84198e37a38c442d68311',
        //       isLabel: true,
        //       projection: 'EPSG:4326'
        //     })
        //   })]
      })
      // 超图图层
      const layer = new TileLayer({
        source: new TileSuperMapRest({
          url: this.url2,
          wrapX: true
        }),
        projection: 'EPSG:4326'
      })
      // this.map.addLayer(layer)
      // 百度地图图层
      // var layer = new TileLayer({
      //   source: new BaiduMap()
      // })
      // 地图控件
      const scaleControl = new ScaleLine()
      this.map.addControl(scaleControl)
      this.map.addLayer(layer)
      // 矢量瓦片
      // const url2 = (window.isLocal ? window.server : 'https://iserver.supermap.io') + '/iserver/services/map-china400/rest/maps/China'
      // new MapService(url2).getMapInfo((serviceResult) => {
      //   // 矢量瓦片风格参数对象
      //   const stylesOptions = {
      //     url: url2,
      //     view: this.map.getView()
      //   }
      //   // 创建瓦片风格对象
      //   const vectorTileStyles = new VectorTileStyles(stylesOptions)
      //   // 通过地图信息获取瓦片参数对象
      //   const vectorTileOptions = VectorTileSuperMapRest.optionsFromMapJSON(url2, serviceResult.result)
      //   // 添加矢量瓦片图层
      //   const vectorLayer = new VectorTile({
      //     source: new VectorTileSuperMapRest(vectorTileOptions),
      //     style: vectorTileStyles.getFeatureStyle
      //   })
      //   this.map.addLayer(vectorLayer)
      //   this.map.on('click', (e) => {
      //     this.map.forEachFeatureAtPixel(e.pixel, (feature) => {
      //       vectorTileStyles.dispatchEvent({ type: 'featureSelected',
      //         selectedId: feature.getProperties().id,
      //         layerName: feature.getProperties().layerName
      //       })
      //       return true
      //     }, { hitTolerance: 5 })
      //     vectorLayer.changed()
      //   })
      // })
      // end
    },
    // 加载3D超图
    initData3() {
      // const viewer = new Cesium.Viewer('map')
      // eslint-disable-next-line no-unused-vars
      const viewer = new SuperMap3D.Viewer('map')
      viewer.imageryLayers.addImageryProvider(new SuperMap3D.SingleTileImageryProvider({
        url: './images/worldimage.jpg'
      }))
    }
  },
  watch: {}
}
