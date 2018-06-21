import Api from '@/Api/Api'
export const FETCH_POSTS = 'FETCH_POSTS'

const state = {
  posts: []
}
const mutations = {
  [FETCH_POSTS] (state, data) {
    state.posts = data
  }
}
const actions = {
  async fetchAllPosts ({commit}) {
    try {
      const response = await Api.fetchPosts()
      commit(FETCH_POSTS, response.data)
    } catch (error) {
      console.log(error)
    }
  }
}

const getters = {
  posts () {
    return state.posts
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
