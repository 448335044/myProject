import Vue from 'vue';
import confirm from './Popup.vue';
 
let confirmConstructor = Vue.extend(confirm);
 
let theConfirm = function (text) {
    return new Promise((res, rej) => { //promise封装，ok执行resolve，no执行rejectlet
        let confirmDom = new confirmConstructor({ 
            // el: document.createElement('div')
        })
        confirmDom.$mount();
        document.body.appendChild(confirmDom.$el); //new一个对象，然后插入body里面

        confirmDom.text = text; //为了使confirm的扩展性更强，这个采用对象的方式传入，所有的字段都可以根据需求自定义
        
        confirmDom.ok = function () {
            res()
            confirmDom.isShow = false
        }

        confirmDom.close = function () {
            rej()
            confirmDom.isShow = false
        }
    })
 }
 
export default theConfirm; 
// export default {
//     install(vue) {
//       vue.prototype.$popup = theConfirm
//     }
//   }
  