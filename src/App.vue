<template>
  <div id="app">
    <navbar :title="'Harness Starter Template'" />
    <router-view :key="$route.name" />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
</style>
