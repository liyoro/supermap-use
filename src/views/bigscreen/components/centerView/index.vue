<template>
  <div class="center-view">
    <div id="map" />
    <!-- <sm-web-map :map-options="mapOptions" /> -->
    <!-- <sm-web-map server-url="https://iportal.supermap.io/iportal/" map-id="801571284"></sm-web-map> -->
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
function onload(SuperMap3D) {
  var viewer = new SuperMap3D.Viewer('map')
  viewer.imageryLayers.addImageryProvider(new SuperMap3D.SingleTileImageryProvider({
    url: './images/worldimage.jpg'
  }))
}
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
