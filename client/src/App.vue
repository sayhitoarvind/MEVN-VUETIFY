<template>
  <v-app>
  <sidebar-component :drawer="drawer"/>
    <header-component :title="title" :toggleSidebar.sync="toggleSidebar"/>
    <v-content>
      <router-view/>
    </v-content>
    <footer-component/>
  </v-app>
</template>

<script>
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import Footer from '@/components/Layout/Footer'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    'header-component': Header,
    'sidebar-component': Sidebar,
    'footer-component': Footer
  },
  data () {
    return {
    }
  },
  computed: mapState({
    title: state => {
      return state.route.meta.title
    },
    drawer: state => {
      return state.ui.drawer
    }
  }),
  methods: {
    ...mapActions('ui',
    {toggleSidebar: 'toggleSidebar'}
  )
  }

}
</script>
