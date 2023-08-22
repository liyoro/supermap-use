<template>
  <div class="loginView">
    <div>登录</div>
    <div>
      <el-button @click="loginClick">登录</el-button>
    </div>
  </div>
</template>

<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang='scss' scoped>
@import './index.scss'
</style>
