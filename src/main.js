import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { setupCache, setup } from 'axios-cache-adapter';
// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

// Create `axios` instance passing the newly created `cache.adapter`
const api = setup({
  // `axios` options
  baseURL: 'https://jsonplaceholder.typicode.com/',
  adapter: cache.adapter,
  // `axios-cache-adapter` options
  cache: {
    maxAge: 15 * 60 * 1000,
  },
});
import 'materialize-css/dist/css/materialize.min.css';

Vue.prototype.$http = api;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
