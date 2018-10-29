import Vue from 'vue'
import router from './router'
import App from './components/App.vue'

import socketio from 'socket.io-client'

export const SocketURL = "http://localhost:3000";
export const SocketInstance = socketio(SocketURL);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
