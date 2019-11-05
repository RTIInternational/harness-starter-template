import Vuex from 'vuex'
import VueRouter from 'vue-router'
import datavue from '@datavue/datavue'
import { datavueUI } from '@datavue/datavue-ui'
import pages from '@/datavue-pages/manifest'
import { createLocalVue, mount } from '@vue/test-utils'
import App from '@/App'

// creating vue instance with test pages/datavue mocked
const localVue = createLocalVue()

localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(Vuex)
const store = new Vuex.Store()

localVue.use(datavue, { store, router, pages })
localVue.use(datavueUI)

// set up constant app
let wrapper = mount(App, {
  localVue,
  router,
  store,
  stubs: ['router-link', 'router-view']
})

// general
describe('datavue', () => {
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
