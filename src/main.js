import Vue from 'vue'
import app from './App.vue'

// 1.0 引入 Mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
import { Header, Button, Swipe, SwipeItem, Toast } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Toast.name, Toast)

// 2.0 引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 3.0 引入MUI
import './assets/lib/mui/dist/css/mui.css'
import './assets/lib/mui/dist/css/icons-extra.css'

import router from './router.js'

let vm = new Vue({
    el: "#app",
    data: {},
    render: c => c(app),
    router
})