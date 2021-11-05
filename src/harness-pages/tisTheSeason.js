import BarChart from '../components/barChart'
import tisTheSeason from '../components/tisTheSeason'
import { components } from '@rtidatascience/harness-ui'
export default class TisTheSeason {
  title = 'Tis The Season'
  key = 'tisTheSeason'
  pageComponent = tisTheSeason
  pageProps = {}
  retrieveData = async (state, pageObject, hs) => {
    return {
      halloweenMovies:
      {
        title: 'Halloween Movies',
        data:
        [
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
      },
      thanksgivingFood:
      [
        {}
      ]
    }
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
      },
      exampleMultiSelect: {
        key: 'exampleMultiSelect',
        label: 'Example Multiselect',
        component: components['HarnessUiSelect'],
        props: {
          multiple: true
        },
        options: [
          {
            key: 'exampleOption',
            label: 'Example Option'
          },
          {
            key: 'exampleOption2',
            label: 'Example Option 2',
            default: true
          },
          {
            key: 'exampleOption3',
            label: 'Example Option 3',
            default: true
          }
        ]
      },
      exampleInput: {
        key: 'exampleInput',
        label: 'Example Input',
        component: components['HarnessUiInput'],
        options: [
          {
            key: 'value'
          }
        ]
      },
      exampleRadioGroup: {
        key: 'exampleRadioGroup',
        label: 'Example Radio Group',
        component: components['HarnessUiRadioGroup'],
        options: [
          {
            key: 'exampleOption',
            label: 'Example Option'
          },
          {
            key: 'exampleOption2',
            label: 'Example Option2'
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
