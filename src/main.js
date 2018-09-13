import Vue from 'vue'
import router from './router'

// import socketio from 'socket.io-client'
export const SocketURL = "http://192.168.88.64:3000"

// to be deleted
//import VueSocketIO from 'vue-socket.io'
//Vue.use(VueSocketIO, SocketInstance)

import App from './components/App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
