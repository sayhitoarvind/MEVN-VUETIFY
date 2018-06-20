<template>
  <v-toolbar
    app fixed clipped-left dark dense color="primary">
    <v-toolbar-side-icon @click="toggleSidebar"></v-toolbar-side-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  props: ['toggleSidebar', 'title'],
  data () {
    return {
      clipped: false
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
