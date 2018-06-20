<template>
  <v-navigation-drawer
    clipped="clipped"
    v-model="drawer"
    stateless
    fixed
    app
  >
    <v-list two-line>
      <v-list-tile
        v-for="items in sidebarLinks" :key="items.title" :to="items.path"
      >
        <v-list-tile-action>
          <v-icon >{{items.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{items.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['drawer'],
  data () {
    return {
      clipped: true,
      sidebarLinks: [
        { title: 'Dashboard', icon: 'dashboard', path: '/' }
      ]
    }
  },
  computed: {
  },
  mounted () {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
