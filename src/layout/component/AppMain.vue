<template>
  <div class="app-main">
    <router-view :key="key" />
  </div>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-main {
    background-color: pink;
    min-height: 500px;
  }
</style>
