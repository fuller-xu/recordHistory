import Vue from 'vue';
import Vuex from 'vuex';
import { MUTATION_INCREMENT } from './mutation_types';
Vue.use(Vuex);

const moduleA = {
  namespaced: true,
  state: { childName: '我是子模块' }
};

export default new Vuex.Store({
  modules: {
    child: moduleA
  },
  state: {
    count: 0,
    username: 'admin'
  },
  getters: {
    loginName(state) {
      return state.username;
    }
  },
  mutations: {
    [MUTATION_INCREMENT](state) {
      console.log(123213);
      state.count++;
    }
  }
});
