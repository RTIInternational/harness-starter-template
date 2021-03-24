<template>
  <div id="app">
    <navbar
      :title="'Datavue Starter Template'"
      :classes="'bg-primary text-light'"
    />
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
