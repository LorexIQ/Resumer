export default {
  state() {
    return {
      newsData: []
    }
  },
  getters: {
    GET_NEWS: state => {
      return state.newsData;
    }
  },
  actions: {
    SET_NEWS: (context) => {
      context.commit('SAVE_NEWS', require('@/static/news').sort((a, b) => a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0));
    }
  },
  mutations: {
    SAVE_NEWS: (state, payload) => {
      state.newsData = payload;
    }
  },
}
