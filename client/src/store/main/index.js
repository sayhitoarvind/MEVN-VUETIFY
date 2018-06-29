import Api from '@/Api/Api'
export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const VIEW_POST_SUCCESS = 'VIEW_POST_SUCCESS'


const state = {
  posts: [],
  message: undefined,
  currentPost: undefined

}
const mutations = {
  [FETCH_POSTS] (state, data) {
    state.posts = data
  },
  [CREATE_POST_SUCCESS] (state, message){
    state.message = message
  },
  [VIEW_POST_SUCCESS] (state, post) {
    state.currentPost = post
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
},
  async viewSelectedPost({commit}, Id) {
    try {
      const response = await Api.viewPost(Id)
      commit(VIEW_POST_SUCCESS, response.data)
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
  },
  currentPost () {
    return state.currentPost
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
