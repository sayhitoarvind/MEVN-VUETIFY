import axios from 'axios'

const Api = {

  baseUrl: 'http://localhost:8081',
  url1: 'posts',
  url2: 'post',

  fetchPosts () {
    return axios({
      method: 'GET',
      baseURL: Api.baseUrl,
      url: Api.url1,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },

  newPost (post) {
    return axios({
      method: 'POST',
      baseURL: Api.baseUrl,
      url: Api.url2,
      headers: {
        'Content-Type': 'application/json'
      },
      data: post
    }
  )
  },

  viewPost (Id) {
    return axios({
      method: 'GET',
      baseURL: Api.baseUrl,
      url: Api.url2 + '/' + Id,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  },

  deletePost (Id) {
    return axios({
      method: 'DELETE',
      baseURL: Api.baseUrl,
      url: Api.url1 + '/' + Id,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
},

  updatePost (post) {
    return axios({
      method: 'PUT',
      baseURL: Api.baseUrl,
      url: Api.url2 + '/' + post._id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: post
    }
  )
  }

}
export default Api
