<template>
  <div class="container">
    <div class="card">
      <h5 class="card-header">
        Filters
      </h5>
      <div class="card-body">
        <FilterAccordian
          :valid-filters="Object.keys(this.filters)"
        />
      </div>
    </div>
    <br>
    <chartGrid />
  </div>
</template>

<script>
export default {
  name: 'ExamplePage'
}
</script>
<style scoped>
.card {
  margin-top: 1rem;
}
</style>
