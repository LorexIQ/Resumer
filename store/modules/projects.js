export default {
  state() {
    return {
      projectsData: []
    }
  },
  getters: {
    GET_PROJECTS: state => {
      return state.projectsData;
    }
  },
  actions: {
    SET_PROJECTS: (context) => {
      context.commit('SAVE_PROJECTS', require('@/static/projects').sort((a, b) => a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0));
    }
  },
  mutations: {
    SAVE_PROJECTS: (state, payload) => {
      state.projectsData = payload;
    }
  },
}
