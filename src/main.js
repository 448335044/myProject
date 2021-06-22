import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Message from '@/ui/message/index.js'
// Vue.use(Message)
import Message from '@/ui/message/index.js'
Vue.prototype.$message = Message

Vue.config.productionTip = false

 
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  }).$mount('#app')



