import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Header from '../components/header'
import File from '../components/leftmenu/file'
Vue.use(Router)

export default new Router({
  routes: [
  {
  	path:'/',
  	component:Home,
  	children:[
			{
				path:'file',
  			component:File
			}
  	]
  }
  ]
})
