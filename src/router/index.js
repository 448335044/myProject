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
            path: '/testSlideDeleteDetail',
            name: 'testSlideDeleteDetail',
            component: () => import('../views/test/testSlideDelete/detail.vue')
        },
        {
            path: '/testAmap',
            name: 'testAmap',
            component: () => import('../views/test/amap/index.vue')
        },
        {
            path: '/A',
            name: 'a',
            component: () => import('../views/to/A.vue')
        },
        {
            path: '/B',
            name: 'a',
            component: () => import('../views/to/B.vue')
        },
        {
            path: '/C',
            name: 'a',
            component: () => import('../views/to/C.vue')
        },
        {
            path: '/D',
            name: 'a',
            component: () => import('../views/to/D.vue')
        },
    ]
})

