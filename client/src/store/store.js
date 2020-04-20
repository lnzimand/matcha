import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setLoggedIN (state, isUserLoggedIn) {
      state.isUserLoggedIn = true
    }
  },
  actions: {
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setLoggedIN ({commit}, isUserLoggedIn) {
      commit('setLoggedIN', isUserLoggedIn)
    }
  }
})
