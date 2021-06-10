import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//     render: h => h(App),
//   }).$mount('#app')

// ------------------------

// import Vue from 'vue';
 
// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// });


// -------------------------

// import Vue from 'vue';
// import App from './App.vue';
 
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  template: '<App/>',
  components: { App }
})
// new Vue({ el: '#app', render: h => h(App) })

