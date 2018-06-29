import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/dashboard'
import Create from '@/views/create'
import Edit from '@/views/edit'

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
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit,
      meta: {
        title: 'Edit'
      }
    }
  ]
})
