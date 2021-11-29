import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pages from './harness-pages/manifest'
import harness from '@rtidatascience/harness'
import { harnessUI } from '@rtidatascience/harness-ui'
import Authentication from '@rtidatascience/harness-authentication'

// import 'bootstrap' // enable this line for bootstrap javascript features
import './styles/main.scss'

Vue.use(Authentication, { store, router, url: process.env.VUE_APP_AUTH_URL, cookiePath: process.env.VUE_APP_COOKIE_PATH })
Vue.use(harness, { store, router, pages })
Vue.use(harnessUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
