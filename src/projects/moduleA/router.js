import router from '@/app/router';
const routes = [
  {
    path: '/Ahome',
    name: 'home',
    component: () => import('./home/index.vue'),
    meta: {
      title: 'moduleA的首页',
    }
  },
  {
    path: '/Ahome1',
    name: 'home1',
    component: () => import('./home/index1.vue'),
    meta: {
      title: 'moduleA1的首页',
    }
  }
];

// router.addRoutes(routes)   // 此方法已废弃

// this.$router.getRoutes()   // 可以获取添加的路由数据
routes.forEach((r)=> {
  router.addRoute(r);
})

export default router;
