import Vue from 'vue'
import App from './App'
import screenTextScroll from './components/p-screenTextScroll/screenTextScroll.vue'
Vue.component('textscroll',screenTextScroll)
Vue.config.productionTip = false
import store from './store'  
Vue.prototype.$store = store  
Vue.prototype.$api = 'http://192.168.43.187:8081'
App.mpType = 'app'

const app = new Vue({
    store,
	...App
})
app.$mount()
