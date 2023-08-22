<template>
  <div class="404-container">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  computed: {
    message() {
      return '抱歉, 你访问的页面不存在。'
    }
  }
}
</script>

<style lang="scss" scoped></style>
