import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'
import store from './store'
import router from './router/router'
import axios from 'axios'

Vue.use(axios);
Vue.use(VueMask);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
