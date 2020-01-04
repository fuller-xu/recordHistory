import router from '@/router';
import store from '@/store';
import Vue from 'vue';
import App from './App.vue';

export default new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app');
