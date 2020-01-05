import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { MUTATION_CHILD_CHANGE, MUTATION_INCREMENT } from './mutation_types';
Vue.use(Vuex);

const moduleA = {
  namespaced: true,
  state: { childName: '我是子模块' },
  mutations: {
    [MUTATION_CHILD_CHANGE](state, data) {
      state.childName = data;
    }
  }
};

export default new Vuex.Store({
  modules: {
    child: moduleA
  },
  plugins: [
    createPersistedState({
      // 默认localStorage
      storage: window.sessionStorage
    })
  ],
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
      state.count++;
    }
  }
});
