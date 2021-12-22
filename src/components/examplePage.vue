<template>
  <div class="container">
    <div class="card">
      <h5 class="card-header">
        Filters
      </h5>
      <div class="card-body">
        <FilterAccordion
          :valid-filters="Object.keys(this.filters)"
          :mapping-function="filterMapper"
          :filter-layout="layout"
        />
      </div>
    </div>
    <br>
    <chartGrid />
  </div>
</template>

<script>
export default {
  name: 'ExamplePage',
  data () {
    return {
      layout: {
        'Select_Type': {
          columns: 2,
          labelPosition: 'vertical',
          spread: true
        },
        'Input_Type': {
          columns: 4,
          labelPosition: 'vertical',
          spread: true
        },
        'Radio_Type': {
          columns: 2,
          labelPosition: 'vertical',
          spread: true
        },
        'Checkbox_Type': {
          columns: 2,
          labelPosition: 'vertical',
          spread: true
        }
      }
    }
  },
  methods: {
    filterMapper (filterType) {
      return `${filterType.replace('_', ' ').toLowerCase()}s`
    }
  }
}
</script>
<style scoped>
.card {
  margin-top: 1rem;
}
</style>
