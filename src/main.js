import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import UI from '@/ui/index.js'
Vue.use(UI)

// import message from '@/ui/message/index.js'
// Vue.use(message)
// import popup from '@/ui/popup/index.js'
// Vue.use(popup)

// import Message from '@/ui/message/index.js'
// Vue.prototype.$message = Message

import api from "./api"
Vue.prototype.$api = api

Vue.config.productionTip = false

 
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  }).$mount('#app')



