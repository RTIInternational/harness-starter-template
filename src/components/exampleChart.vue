<template>
  <div class="card">
    <h5 class="card-header">{{chart.item.title}}</h5>
    <div class="card-body">
      <pre>
        <code>
          {{getChartData(chart.key)}}
        </code>
    </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exampleChart',
  props: {
    chart: {
      required: true,
      type: Object
    }
  }
}
</script>
