import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/dashboard'
import Create from '@/views/create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard'
      }
    },
    {
      path: '/create',
      name: 'Create',
      component: Create,
      meta: {
        title: 'Create'
      }
    }
  ]
})
