import router from '@/router';
import Vue from 'vue';
import App from './App.vue';

export default new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
