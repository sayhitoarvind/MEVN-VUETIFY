<template>
  <v-container align-content-center>
    <v-layout column>
      <v-card>
          <v-toolbar>
            <v-toolbar-title>Notes</v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link to="create">
            <v-btn icon>
              <v-icon>add</v-icon>
            </v-btn>
          </router-link>
          </v-toolbar>
          <v-list>
          <v-list-tile v-for="(item,index) in posts" :key="index">
                <v-list-tile-content>
                      <v-list-tile-title>
                      {{item.title}}
                      </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click="editNote(item._id)">
                  <v-icon color="primary">edit</v-icon>
                </v-btn>

              </v-list-tile-action>
          </v-list-tile>
        </v-list>
        </v-card>
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
      fetchAllPosts: 'fetchAllPosts'
    }),
    editNote (id) {
      this.$router.push({path: `/edit/${id}` })
    }
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
