<template>
  <div class="center-view">
    <div id="map" />
    <!-- <sm-web-map :map-options="mapOptions" /> -->
    <!-- <sm-web-map server-url="https://iportal.supermap.io/iportal/" map-id="801571284"></sm-web-map> -->
  </div>
</template>

<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
