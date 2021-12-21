import exampleChart from '../components/exampleChart'
import examplePage from '../components/examplePage'
import { components } from '../../dev-packages/harness-ui/src/harness-ui'
export default class ExamplePage {
  title = 'Example Page'
  key = 'examplePage'
  pageComponent = examplePage
  pageProps = {}
  retrieveData = async (state, pageObject, hs) => {
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
        ],
        props: {
          filterType: 'Select_Type'
        }
      },
      exampleMultiSelect: {
        key: 'exampleMultiSelect',
        label: 'Example Multiselect',
        component: components['HarnessUiSelect'],
        props: {
          multiple: true,
          filterType: 'Select_Type'
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
        ],
        props: {
          filterType: 'Input_Type'
        }
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
        ],
        props: {
          filterType: 'Radio_Type'
        }
      },
      exampleCheckboxGroup: {
        key: 'exampleCheckboxGroup',
        label: 'Example Checkbox Group',
        component: components['HarnessUiCheckboxGroup'],
        options: [
          {
            key: 'exampleOption',
            label: 'Example Option',
            default: true
          },
          {
            key: 'exampleOption2',
            label: 'Example Option2'
          },
          {
            key: 'exampleOption3',
            label: 'Example Option3'
          },
          {
            key: 'exampleOption4',
            label: 'Example Option4'
          }
        ],
        props: {
          multiple: true,
          labelPosition: 'vertical',
          collapse: true,
          filterType: 'Checkbox_Type'
        }
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
