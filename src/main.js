import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入css文件
import './asset/css/index.css'
// 导入全局指令
import '@/utils/derective'
// 导入ui组件库
import UI from '@/ui/index.js'
// 导入eruda工具
import '@/utils/eruda'

Vue.use(UI)
// 可在不同环境使用定义的不同环境常量
// console.log('process.env', process.env.API_URL)

// import message from '@/ui/message/index.js'
// Vue.use(message)
// import popup from '@/ui/popup/index.js'
// Vue.use(popup)
// import Message from '@/ui/message/index.js'
// Vue.prototype.$message = Message

// 导入api模块
import api from "./api"
Vue.prototype.$api = api

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')


 


