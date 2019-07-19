
import VueRouter from 'vue-router'

// 1.0 引入tabbar中的组件
import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shopcart from './components/tabbar/ShopCart.vue'
import search from './components/tabbar/SearchContainer.vue'

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: "/home", component: home },
        { path: "/member", component: member },
        { path: "/shopcar", component: shopcart },
        { path: "/search", component: search }
    ],
    linkActiveClass: "mui-active"
})

