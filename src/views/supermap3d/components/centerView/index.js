// import { mapGetters } from 'vuex'
// import axios from 'axios'
// import { findElem } from '@/utils/index'

// const getMapJson = (url) => {
//   return axios.get(`data/map/${url}.json`)
// }

// let viewer = null

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
      url4: 'https://maptiles.supermapol.com/iserver/services/3D-local3DCache-GlobalTIN30M/rest/realspace/datas/Global_TIN_30M',
      // EPSG:3857
      China_Dark: 'https://maptiles.supermapol.com/iserver/services/map_China/rest/maps/China_Dark',
      // EPSG:3857
      China_Light: 'https://maptiles.supermapol.com/iserver/services/map_China/rest/maps/China_Light',
      // 京津地区土地利用现状图 EPSG:3857
      mapService: 'https://www.supermapol.com/proxy/iserver/services/map_jingjin_62mzqg3d/rest/maps/%E4%BA%AC%E6%B4%A5%E5%9C%B0%E5%8C%BA%E5%9C%9F%E5%9C%B0%E5%88%A9%E7%94%A8%E7%8E%B0%E7%8A%B6%E5%9B%BE?prjCoordSys=%7B%22epsgCode%22:3857%7D',
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
      shinePoint: {
        position: { lng: 110.286983, lat: 21.607153, height: 134500 }
      }
    }
  },
  computed: {
  },
  mounted() {
    this.initData3()
  },
  created() {
  },
  updated() {},
  methods: {
    // 加载3D超图
    initData3() {
      // scene.camera.setView({
      //     destination: new SuperMap3D.Cartesian3(
      //         -1206939.1925299785,
      //         5337998.241228442,
      //         3286279.2424502545
      //     ),
      //     orientation: {
      //         heading: 1.4059101895600987,
      //         pitch: -0.20917672793046682,
      //         roll: 2.708944180085382e-13,
      //     },
      // })
      // eslint-disable-next-line no-unused-vars
      const viewer = new SuperMap3D.Viewer('map')
      const scene = viewer.scene
      // eslint-disable-next-line new-cap
      // const pointDestination = new SuperMap3D.Cartesian3.fromDegrees(this.shinePoint.position.lng, this.shinePoint.position.lat, this.shinePoint.position.height) // 视野点
      // 设置相机到固定位置
      // scene.camera.setView({
      //   // 三维笛卡尔坐标（Cartesian3）
      //   destination: pointDestination,
      //   orientation: {
      //     heading: 0,
      //     pitch: -90,
      //     roll: 0
      //   }
      // })
      const promise = scene.open(this.url2)

      SuperMap3D.when(promise, function(layers) {
        scene.camera.setView({
          destination: new SuperMap3D.Cartesian3(-2180753.065987198, 4379023.266141494, 4092583.575045952),
          orientation: {
            heading: 4.0392222751147955,
            pitch: 0.010279641987852584,
            roll: 1.240962888005015e-11
          }
        })
      })
      // 使用本地的一张图片初始化地球，建议图片长宽比2:1
    }
    // flyToPoi(position) {
    //   viewer?.camera.flyTo({
    //     destination: Cesium.Cartesian3.fromDegrees(position.lng, position.lat, 6500.0),
    //     orientation: {
    //       heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) //东西南北朝向
    //       pitch: Cesium.Math.toRadians(-90), // default value (looking down)  //俯视仰视视觉
    //       roll: 0.0 // default value
    //     },
    //     duration: 3 // 3秒到达战场
    //   })
    // }
  },
  watch: {}
}
