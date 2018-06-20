<template>
  <v-footer :fixed="fixed" inset class="pa-3"  app>
    <v-spacer></v-spacer>
    <span>&copy; 2018 </span>
  </v-footer>

</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      fixed: false
    }
  },
  computed: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
