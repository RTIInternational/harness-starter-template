import exampleChart from '../components/exampleChart'
import examplePage from '../components/examplePage'
import { components } from '../../dev-packages/datavue-ui/src/datavue-ui'
export default class ExamplePage {
  title = 'Example Page'
  key = 'examplePage'
  pageComponent = examplePage // add page component here
  pageProps = {}
  retrieveData = async (state, pageObject) => {
    return { exampleChart: [{ key: 'value', key2: 'value2' }] }
  }
  filters = function () {
    return {
      exampleFilter: {
        key: 'exampleFilter',
        label: 'Example Filter',
        component: components['DatavueUiSelect'],
        options: [
          {
            key: 'exampleOption',
            label: 'Example Option',
            default: true
          }
        ]
      }
    }
  }

  charts = function () {
    return {
      exampleChart: {
        title: 'Example Chart',
        component: components['ChartWithTable'],
        props: {
          chartComponent: exampleChart,
          tableAdapter: function (data) {
            let map = {
              'key': 'Transformed key',
              'key2': 'Transformed key 2'
            }
            let newData = []
            data.forEach(datum => {
              newData.push(Object.keys(datum).reduce((acc, key) => {
                acc[map[key]] = datum[key].toUpperCase() + ' TRANSFORMED UPPERCASE'
                return acc
              }, {}))
            })
            console.log(newData)
            return newData
          }
        }
      }
    }
  }
}
