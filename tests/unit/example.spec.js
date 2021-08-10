import Vuex from 'vuex'
import VueRouter from 'vue-router'
import harness from '@rtidatascience/harness'
import { harnessUI } from '@rtidatascience/harness-ui'
import pages from '@/harness-pages/manifest'
import { createLocalVue, mount } from '@vue/test-utils'
import App from '@/App'

// creating vue instance with test pages/harness mocked
const localVue = createLocalVue()

localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(Vuex)
const store = new Vuex.Store()

localVue.use(harness, { store, router, pages })
localVue.use(harnessUI)

// set up constant app
let wrapper = mount(App, {
  localVue,
  router,
  store,
  stubs: ['router-link', 'router-view']
})

// general
describe('harness', () => {
  it('Mounts successfully', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('Has vuex store', () => {
    expect(wrapper.vm.$store).toBeTruthy()
  })

  it('Has vue-router', () => {
    expect(wrapper.vm.$router).toBeTruthy()
  })
})
