<template>
  <div>
    <highcharts
      :options="chartOptions"
      class="vh70"
    />
  </div>
</template>

<script>
export default {
  name: 'BarChart',
  props: {
    'chart': {
      type: Object,
      required: true
    }
  },
  computed: {
    chartOptions () {
      return {
        chart: {
          marginRight: '50',
          marginBottom: '50',
          type: 'bar'
        },
        credits: {
          enabled: false
        },
        title: {
          text: this.getChartData(this.chart.key) ? this.getChartData(this.chart.key).title : ''
        },
        xAxis: {
          categories: this.getChartData(this.chart.key) ? this.getChartData(this.chart.key).data.map(datum => datum[0]) : []
        },
        yAxis: {
          title: {
            text: null
          }
        },
        series: [
          {
            data: this.getChartData(this.chart.key) ? this.getChartData(this.chart.key).data.map(datum => { return { name: datum[0], y: datum[1] } }) : []
          }
        ],
        legend: {
          enabled: false
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        }
      }
    }
  }
}
</script>
