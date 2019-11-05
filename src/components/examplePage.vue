<template>
  <div class="container">
    <div class="card">
      <h5 class="card-header">Filters</h5>
      <div class="card-body">
        <FilterGrid />
      </div>
    </div>

    <chartGrid />
  </div>
</template>

<script>
export default {
  name: 'examplePage'
}
</script>
<style scoped>
.card {
  margin-top: 1rem;
}
</style>
