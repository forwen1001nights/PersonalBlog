import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    currentUser: ''
  },
  mutations: {
    loginIn (state) {
      state.isLogin = true;
    },
    loginOut (state) {
      state.isLogin = false;
    },
    setCurUser(state, username) {
      state.currentUser = username;
    }
  },
  actions: {
  },
  modules: {
  }
})
