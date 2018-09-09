import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './components/Dashboard.vue'
import StartSession from './components/StartSession.vue'
import JoinSession from './components/JoinSession.vue'
import Session from './components/Session.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	hash: false,	
	routes: [
		{ path: '/', name: 'dashboard', component: Dashboard },
		{ path: '/start-session', name: 'start-session', component: StartSession },
		{ path: '/join-session', name: 'join-session', component: JoinSession },
		{ path: '/:id', name: 'session', component: Session },		
		{ path: '/session/:id', name: 'full-session', component: Session },		
	]
})