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
          <v-toolbar-title>Create a new Note</v-toolbar-title>
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
                              :rules="[(v) => v.length <= 25 || 'Max 25 characters']"
                              :counter="25"
                              v-model="title"
                              label="Note Title"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field
                              :rules="[(v) => v.length <= 50 || 'Max 50 characters']"
                              :counter="50"
                              v-model="description"
                              label="Note Description"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <p v-if="successMsg != ''">{{ successMsg }}</p>
                          </v-flex>
                        </v-layout>
                      </v-container>
        </v-card-text>
        <v-card-actions>
          <v-flex offset-xs4>
            <v-btn @click="createPost">Create</v-btn>
            <v-btn>Discard</v-btn>
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
      title: '',
      description: '',
      successMsg: ''
    }
  },
  methods: {
    ...mapActions('main', {
      createNewPost: 'createNewPost'
    }),
    createPost () {
      this.createNewPost({title: this.title, description: this.description})
    }
  },
  created () {
  },
  computed: {
    ...mapGetters('main', {
      message: 'message'
    })
  },
  watch: {
    message (value) {
      if (value !== undefined) {
        this.successMsg = value
      }
    }
  }
}
</script>
<style scoped>
</style>
