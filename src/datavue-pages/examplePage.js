import exampleChart from '../components/exampleChart'
import examplePage from '../components/examplePage'
import { components } from '@datavue/datavue-ui'
export default class ExamplePage {
  title = 'Example Page'
  key = 'examplePage'
  pageComponent = examplePage // add page component here
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
        component: exampleChart,
        props: {}
      }
    }
  }
}
