<template>
  <div class="container">
    <div class="card">
      <h5 class="card-header">Filters</h5>
      <div class="card-body">
        <FilterGrid />
      </div>
    </div>
    <br />
    <chartGrid />
  </div>
</template>

<script>
export default {
  name: 'examplePage',
  mounted () {
    this.$store.subscribeAction({
      after: (action, state) => {
        if (action.type.includes('LOAD_DATA')) {
          console.log(action)
          // this.$router.push({ query: { 'entity': this.page.pageProps.entity } })
        }
      }
    })
  }
}
</script>
<style scoped>
.card {
  margin-top: 1rem;
}
</style>
