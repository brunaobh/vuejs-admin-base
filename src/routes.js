import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Main from './pages/Main.vue';
//  Routes
const routes = [
  {path: '/', component: Main, name: 'main', meta: {requiresAuth: false}},
  // Catch all redirect
  {path: '*', redirect: '/'}
];

const router = new VueRouter({
  routes
});

export default {
  router
}
