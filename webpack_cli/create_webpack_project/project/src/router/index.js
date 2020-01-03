import Home from '@/components/Home.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/vueMessage',
    children: [
      {
        path: '/vueMessage',
        component: () => import(/* webpackChunkName: "message" */ '@/components/VueMessage.vue')
      },
      {
        path: '/vueContent',
        component: () => import(/* webpackChunkName: "content" */ '@/components/VueContent.vue')
      }
    ]
  }
];

Vue.use(VueRouter);
export default new VueRouter({
  routes
});
