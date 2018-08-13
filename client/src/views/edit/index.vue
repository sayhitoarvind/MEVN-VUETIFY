<template>
  <v-container align-content-center>
    <v-layout justify-center class="mt-5">
      <v-card width="600px" height="600px">
        <v-toolbar>
          <router-link to="/">
          <v-btn icon>
                <v-icon>arrow_back</v-icon>
              </v-btn>
            </router-link>
              <v-spacer></v-spacer>
          <v-toolbar-title>Edit</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
                <v-icon>more_vert </v-icon>
              </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container fluid class="px-3">
                        <v-layout row wrap>
                          <v-flex xs12>
                            <v-text-field
                              v-model="currentPost.title"
                              label="Note Title"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field
                              v-model="currentPost.description"
                              label="Note Description"
                            ></v-text-field>
                          </v-flex>

                        </v-layout>
                      </v-container>
        </v-card-text>
        <v-card-actions>
          <v-flex offset-xs5>
            <v-btn>Save</v-btn>
          </v-flex>
        </v-card-actions>
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
      viewSelectedPost: 'viewSelectedPost'
    })

  },
  created () {
    this.viewSelectedPost(this.$route.params.id)
  },
  computed: {
    ...mapGetters('main', {
      currentPost: 'currentPost'
    })
  },
  watch: {

  }
}
</script>
<style scoped>
</style>
