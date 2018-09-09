import Vue from 'vue'
import router from './router'

import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
export const SocketInstance = socketio('http://192.168.88.64:3000')
Vue.use(VueSocketIO, SocketInstance)

import App from './components/App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
