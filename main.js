import Vue from 'vue'
import App from './App'
import screenTextScroll from './components/p-screenTextScroll/screenTextScroll.vue'
Vue.component('textscroll',screenTextScroll)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
