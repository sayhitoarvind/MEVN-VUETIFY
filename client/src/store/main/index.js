import Api from '@/Api/Api'
export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'

const state = {
  posts: [],
  message: undefined

}
const mutations = {
  [FETCH_POSTS] (state, data) {
    state.posts = data
  },
  [CREATE_POST_SUCCESS] (state, message){
    state.message = message
  }
}
const actions = {
  async fetchAllPosts ({commit}) {
    try {
      const response = await Api.fetchPosts()
      commit(FETCH_POSTS, response.data.posts)
    } catch (error) {
      console.log(error)
    }
  },
  async createNewPost ({commit}, post) {
    console.log("post is",post)
    try{
    const response = await Api.newPost(post)
    commit(CREATE_POST_SUCCESS, response.data.message)
  } catch (error) {
    console.log(error)
  }
}
}

const getters = {
  posts () {
    return state.posts
  },
  message () {
    return state.message
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
