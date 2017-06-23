import Vue from 'vue'
//import VueResource from 'vue-resource'
import store from './store.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'
import router from "./router.js"
//Vue.use(VueResource);
Vue.use(ElementUI);
new Vue({ el: '#root', router,store,render:h=>h(App)})






