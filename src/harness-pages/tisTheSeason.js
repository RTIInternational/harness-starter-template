import BarChart from '../components/barChart'
import tisTheSeason from '../components/tisTheSeason'
import { components } from '@rtidatascience/harness-ui'
export default class TisTheSeason {
  title = 'Tis The Season'
  key = 'tisTheSeason'
  pageComponent = tisTheSeason
  pageProps = {}
  retrieveData = async (state, pageObject, hs) => {
    let data = hs.getRequestCache()
    if (!data) {
      data = [
        ['What We Do in the Shadows', 96],
        ['Halloween', 96],
        ['The Nightmare Before Christmas', 95],
        ['It\'s the Great Pumpkin, Charlie Brown', 95],
        ['The Witches', 93],
        ['It (2017)', 86],
        ['The Blair Witch Project', 86],
        ['The Exorcist', 83],
        ['Halloweentown', 80],
        ['Scream', 79]
      ]
      hs.setRequestCache(data)
    }
    let charts = {}
    let halloweenMovies =
      {
        title: 'Halloween Movies',
        data: data
      }
    charts.halloweenMovies = halloweenMovies
    return charts
  }
  filters = function () {
    return {
      exampleSelect: {
        key: 'exampleSelect',
        label: 'Example Select',
        component: components['HarnessUiSelect'],
        options: [
          {
            key: 'exampleOption',
            label: 'Example Option',
            default: true
          },
          {
            key: 'exampleOption2',
            label: 'Example Option 2'
          },
          {
            key: 'exampleOption3',
            label: 'Example Option 3'
          }
        ]
      }
    }
  }

  charts = function () {
    return {
      halloweenMovies: {
        title: 'Halloween Movies',
        component: components['ChartWithTable'],
        props: {
          chartComponent: BarChart
          // tableAdapter: function (chart, filters, data) {
          //   let map = {
          //     'key': 'Transformed key',
          //     'key2': 'Transformed key 2'
          //   }
          //   let newData = []
          //   data.forEach(datum => {
          //     newData.push(Object.keys(datum).reduce((acc, key) => {
          //       acc[map[key]] = datum[key].toUpperCase() + ' TRANSFORMED UPPERCASE'
          //       return acc
          //     }, {}))
          //   })
          //   return newData
          // }
        }
      }
    }
  }
}
