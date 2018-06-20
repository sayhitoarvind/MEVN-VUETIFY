// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store' //  Vuex store
import 'es6-promise/auto' // dependancy for vuex
import { sync } from 'vuex-router-sync' //  vue-router store sync used for titles

Vue.use(Vuetify, { theme: {

}})
sync(store, router) // adds route module into vuex store
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
