import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import loading from './modules/loading'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
		cart,
		loading
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})