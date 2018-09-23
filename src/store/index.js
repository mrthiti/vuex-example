import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import name from './modules/name'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    counter,
    name
  },
  strict: debug
})
