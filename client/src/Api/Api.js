import axios from 'axios'

const Api = {

  baseUrl: 'http://localhost:8081',
  url: 'posts',

  fetchPosts () {
    return axios({
      method: 'GET',
      baseURL: Api.baseUrl,
      url: Api.url,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
export default Api
