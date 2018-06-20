import Vue from 'vue'
import Vuex from 'vuex'
import ui from './ui'
import main from './main'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ui,
    main
  }
})

export default store
