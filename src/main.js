import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pages from './datavue-pages/manifest'
import datavue from '@datavue/datavue'
import { datavueUI } from '@datavue/datavue-ui'

// import 'bootstrap' // enable this line for bootstrap javascript features
import './styles/main.scss'

Vue.use(datavue, { store, router, pages })
Vue.use(datavueUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
