import Vue from 'vue'
import VueRouter from 'vue-router';
// import ui from '../ui';
// import navigation from '../components/navi/navigation';
// import CLoading from '../components/c-loading';
import qs from 'qs'


Vue.use(VueRouter)
// Vue.config.productionTip = false

// navigation.addTitleListener(text => {
//   ui.updateTitle(text);
// });

// Vue.prototype.$updateTitle = function(title) {
//   navigation.updateTitle(title);
// };
// Vue.prototype.$notify = ui.showNotification;
// Vue.prototype.$showAlertCopy = ui.showAlertCopy;
// Vue.prototype.$popup = ui.showPopup;

// Vue.component('c-loading', CLoading);


const { debug } = qs.parse(window.location.search.replace(/^\?/, ''));

if(process.env.NODE_ENV !== 'production' || debug) {
  const eruda = require('eruda')
  eruda.init()
}

export default Vue;
