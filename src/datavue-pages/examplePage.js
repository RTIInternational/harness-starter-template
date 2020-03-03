import exampleChart from '../components/exampleChart'
import examplePage from '../components/examplePage'
import { components } from '../../dev-packages/datavue-ui/src/datavue-ui'
export default class ExamplePage {
  title = 'Example Page'
  key = 'examplePage'
  pageComponent = examplePage
  pageProps = {}
  retrieveData = async (state, pageObject, dv) => {
    return { exampleChart: [
      { key: 'value1', key2: 'value1' },
      { key: 'value2', key2: 'value2' },
      { key: 'Value3', key2: 'value3' },
      { key: 'value4', key2: 'value4' }

    ] }
  }
  filters = function () {
    return {
      exampleSelect: {
        key: 'exampleSelect',
        label: 'Example Select',
        component: components['DatavueUiSelect'],
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
        component: components['DatavueUiSelect'],
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
        component: components['DatavueUiInput'],
        options: [
          {
            key: 'value'
          }
        ]
      },
      exampleRadioGroup: {
        key: 'exampleRadioGroup',
        label: 'Example Radio Group',
        component: components['DatavueUiRadioGroup'],
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
      exampleChart: {
        title: 'Example Chart',
        component: components['ChartWithTable'],
        props: {
          chartComponent: exampleChart,
          tableAdapter: function (chart, filters, data) {
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
            return newData
          }
        }
      }
    }
  }
}
