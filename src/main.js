import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pages from './datavue-pages/manifest'
import datavue from '../dev-packages/datavue/src/datavue'
import { datavueUI } from '../dev-packages/datavue-ui/src/datavue-ui'

// css and bootstrap js for pills
import 'bootstrap'
import './styles/main.scss'

Vue.use(datavue, { store, router, pages })
Vue.use(datavueUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
