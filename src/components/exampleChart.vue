<template>
  <pre>
    <code>
      {{getChartData(chart.key)}}
    </code>
  </pre>
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
