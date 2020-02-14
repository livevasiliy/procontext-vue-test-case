import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

Vue.prototype.$http = axios;
axios.defaults.baseURL = ' https://jsonplaceholder.typicode.com';
Vue.config.productionTip = false;

/* Directive for initialization sidebar
 * @see https://materializecss.com/sidenav.html#initialization
 */
Vue.directive('sidenav', {
  bind(el) {
    M.Sidenav.init(el);
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
