<template>
  <v-container align-content-center>
    <v-layout column>
      {{ posts }}
    </v-layout>

  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('main', {
      fetchAllPosts: 'fetchAllPosts',
    })
  },
  created () {
    this.fetchAllPosts()
  },
  computed: {
    ...mapGetters('main', {
      posts: 'posts'
    })
  }
}
</script>
<style scoped>
</style>
