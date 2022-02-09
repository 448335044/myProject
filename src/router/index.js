import VueRouter from 'vue-router'
import Vue from 'vue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    // base: process.env.NODE_ENV === 'production' ? '/app' : '/web',
    base: '/app',
    routes: [
        {
            path: '/',
            redirect: "/login"
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/testSlideDelete',
            name: 'testSlideDelete',
            component: () => import('../views/test/testSlideDelete/index.vue')
        },
        {
            path: '/testAmap',
            name: 'testAmap',
            component: () => import('../views/test/amap/index.vue')
        },
    ]
})

