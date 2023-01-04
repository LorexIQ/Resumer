export default {
  state() {
    return {
      userData: {
        stacks: [],
        skills: []
      }
    }
  },
  getters: {
    GET_USER: (state) => {
      return state.userData;
    },
    GET_STACKS: state => {
      return state.userData.stacks;
    },
    GET_SKILLS: state => {
      return state.userData.skills;
    }
  },
  actions: {
    SET_USER: (context) => {
      context.commit('SAVE_USER', require('@/static/user'));
    }
  },
  mutations: {
    SAVE_USER: (state, payload) => {
      const comparator = (a, b) => {
        return a.level > b.level ? -1 : a.level < b.level ? 1 : 0;
      }
      payload.stacks.sort(comparator);
      payload.stacks.forEach(res => res.frameworks && res.frameworks.sort(comparator));
      state.userData = payload;
    }
  },
}
