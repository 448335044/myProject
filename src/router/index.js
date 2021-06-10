import VueRouter from 'vue-router'
import Vue from 'vue';

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: '首页',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            name: '关于',
            component: () => import('../views/About.vue')
        },
    ]
})

