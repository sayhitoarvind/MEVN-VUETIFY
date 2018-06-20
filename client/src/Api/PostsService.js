import Api from '@/Api/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  }
}
