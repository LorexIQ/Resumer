export default {
  state() {
    return {
      userData: {}
    }
  },
  getters: {
    GET_USER: state => {
      return state.userData;
    }
  },
  actions: {
    SET_USER: (context) => {
      context.commit('SAVE_USER', require('@/static/user'));
    }
  },
  mutations: {
    SAVE_USER: (state, payload) => {
      state.userData = payload;
    }
  },
}
