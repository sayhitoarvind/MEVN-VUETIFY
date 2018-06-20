export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

const state = {
  drawer: false
}

const mutations = {
  [TOGGLE_SIDEBAR] (state) {
    state.drawer = !state.drawer
  }
}

const actions = {
  toggleSidebar ({ commit }) {
    commit(TOGGLE_SIDEBAR)
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
