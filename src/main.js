import Vue from 'vue';
import store from '@/store/store';
import axios from '@/plugins/axios';
import router from './router/index';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount('#app');
