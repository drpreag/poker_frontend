import Vue from 'vue'
import router from './router'



import App from './components/App.vue'

import socketio from 'socket.io-client'
// import VueSocketIO from 'vue-socket.io';
export const SocketURL = 'http://192.168.88.64:3000';
export const SocketInstance = socketio(SocketURL);

// Vue.use(socketio, SocketURL);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
