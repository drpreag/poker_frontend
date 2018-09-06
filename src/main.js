import Vue from 'vue'
import router from './router'

import jQuery from 'jquery';
import bootstrap from 'bootstrap';

import TopNavBar from './components/TopNavBar.vue'
import App from './components/App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
