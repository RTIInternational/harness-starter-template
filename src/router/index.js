import { verifyRouterAuthentication } from '@rtidatascience/harness-authentication'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import loginPage from '../components/loginPage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/examplePage' },
    { path: '/login', component: loginPage, meta: { allowGuest: true, ignoreIfAuthenticated: true } },
    { path: '/logout', component: loginPage, meta: { logout: true } }
  ]
})

const GUEST_REDIRECT_ROUTE = '/login'
const AUTH_REDIRECT_ROUTE = '/'

router.beforeEach(async (to, from, next) => {
  const { allow, isGuest } = await verifyRouterAuthentication(store, to)

  if (allow) {
    next()
  } else {
    next(isGuest ? GUEST_REDIRECT_ROUTE : AUTH_REDIRECT_ROUTE)
  }
})

export default router
