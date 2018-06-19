import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import AccessDenied from './pages/AccessDenied.vue';
import ErrorPage from './pages/Error.vue';
import Login from './pages/Login.vue';
import Main from './pages/Main.vue';
import Maintenance from './pages/Maintenance.vue';
import NotFound from './pages/NotFoundPage.vue';
import UnderConstruction from './pages/UnderConstruction.vue';

// Ui-elements
import Carousel from './ui/Carousel.vue';
import Dialog from './ui/Dialog.vue';
import Form from './ui/Form.vue';
import Progress from './ui/Progress.vue';
import Table from './ui/Table.vue';
import Tabs from './ui/Tabs.vue';
import Tag from './ui/Tag.vue';
import Upload from './ui/Upload.vue';

//  Routes
const routes = [
  {path: '/', component: Main, name: 'main', meta: {requiresAuth: false}},

  // Ui elements
  {path: '/ui/carousel', component: Carousel, meta: {requiresAuth: false}},
  {path: '/ui/dialog', component: Dialog, meta: {requiresAuth: false}},
  {path: '/ui/forms', component: Form, meta: {requiresAuth: false}},
  {path: '/ui/progress', component: Progress, meta: {requiresAuth: false}},
  {path: '/ui/table', component: Table, meta: {requiresAuth: false}},
  {path: '/ui/tabs', component: Tabs, meta: {requiresAuth: false}},
  {path: '/ui/tag', component: Tag, meta: {requiresAuth: false}},
  {path: '/ui/upload', component: Upload, meta: {requiresAuth: false}},
  
  // Pages
  {path: '/pages/accessdenied', component: AccessDenied, meta: {requiresAuth: false}},
  {path: '/pages/error', component: ErrorPage, meta: {requiresAuth: false}},
  {path: '/pages/login', component: Login, meta: {requiresAuth: false}},
  {path: '/pages/maintenance', component: Maintenance, meta: {requiresAuth: false}},
  {path: '/pages/notfound', component: NotFound, name: '404', meta: {requiresAuth: false}},
  {path: '/pages/underConstruction', component: UnderConstruction, meta: {requiresAuth: false}},

  // Catch all redirect
  {path: '*', redirect: '/'}
];

const router = new VueRouter({
  routes
});

// Watch every route change
router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth) {
    // Check if user is authenticated
  }

  next();
  return true;
});

const INTERCEPTORS = (request, next) => {
  request.headers.set('Accept', 'application/json');
  request.headers.set('Accept-Language', window.localStorage.getItem('locale'));

  next(response => {
    if (response.status === 401) {
      router.push({path: '/pages/login'});
    }

    if (response.status === 403) {
      router.push({path: '/pages/access_denied'});
    }

    if (response.status === 500) {
      router.push({path: '/pages/error'});
    }

    if (response.status === 503) {
      router.push({path: '/pages/maintenance'});
    }
  });
}

export default {
  router, INTERCEPTORS
}
