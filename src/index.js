require('./bootstrap');

// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueI18n from 'vue-i18n';

// App imports
import App from './components/App.vue';
import routes from './routes';
import 'chart.js';
import 'hchs-vue-charts';

// Element IO
import ElementUI from 'element-ui';

// Set components
Vue.component('app', App);

// Set plugins
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(VueI18n);
Vue.use(VueCharts);

// Set router
const router = routes.router;

// Set resource files for Internationalization(i18n)
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    'en': require('./resources/en.json'),
  }
});

// Watch every routes request
Vue.http.interceptors.push(routes.INTERCEPTORS);

// Vue start
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
