import Vue from 'vue'
import VueRouter from 'vue-router'
// import { preFetchUid, preCheck } from './hooks'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: './',
  routes: [
  ],
  scrollBehavior
})

// router.beforeEach(preFetchUid);
// router.beforeEach(preCheck);

export default router;
// TODO: beforeEach & afterEach
function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return {
      x: 0,
      y: 0
    };
  }
}
