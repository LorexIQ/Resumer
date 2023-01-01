import Vue from 'vue';
import Vuex from 'vuex';
import NewsStore from './modules/news';
import ProjectsStore from './modules/projects';
import UserStore from './modules/user';

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: [
    NewsStore,
    ProjectsStore,
    UserStore
  ]
})
