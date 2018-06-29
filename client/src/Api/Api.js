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
  }

}
export default Api
