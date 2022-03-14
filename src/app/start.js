// import '../init'
import Vue from './vue';
import router from './router';
// import store from './store';

// import '@/scss/a-ui/a-ui.scss';
// import '@/scss/route-transition.scss';
// import '@/scss/flex.scss';
// import '@/scss/fit.scss';



new Vue({
  router,
  // store,

  data() {
    return {
      keepAliveInclude: ['', '', ''],
      transitionName: 'null',
      ts: '',
      navigationBarState: {},
      showNavigationBar: false
    };
  },

  async created() {
    // this.loadTheme();
    // const path = this.$route && this.$route.path;
    // const navigationBarState = navigation.getState(path, config);
    // this.navigationBarState = navigationBarState;
    // this.showNavigationBar =
    //   path !== "/" && navigationBarState && navigationBarState.show;
  },

  methods: {
    // loadTheme() {
    //   let { theme = 'blue' } = localStorage.get(SAAS_BASE_CONFIG) || {}
    //   console.log('theme');
    //   // TODO: 后续更新css文件，如何加载
    //   loadStyle(`${process.env.CDN}/saas/style/theme/${theme}.css`);
    // }
  },

  render(h) {
    return h('div', {
      attrs: {
        id: 'app',
        class: 'ceshi' ? 'has-top-nav-bar' : ''
      }
    }, [
      h('router-view', {
        class: {
          'app-page-container': true,
        }
      })
    ]);
  }
}).$mount('#app');
