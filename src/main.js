import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pages from './harness-pages/manifest'

// import 'bootstrap' // enable this line for bootstrap javascript features
import harness from '@rtidatascience/harness'
import { harnessUI } from '@rtidatascience/harness-ui'

// css and bootstrap js for pills
import 'bootstrap'
import './styles/main.scss'

Vue.use(harness, { store, router, pages })
Vue.use(harnessUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
