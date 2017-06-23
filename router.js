
import Vue from 'vue'
import Router from 'vue-router'
import Main from './main.vue'
import Classes from './classes.vue'
import Goods from './goods.vue'
//import User from './setting.vue'
Vue.use(Router)


export default new Router({
  // mode: 'abstract',
  
  routes: [
    { path: '/main', component: Main },
    { path: '/classes', component: Classes },
  	{ path: '/goods', component: Goods},
    { path: '/', redirect: '/main' }
  ]
  
})