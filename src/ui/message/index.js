import Vue from 'vue'
import MessageTel from './Toast.vue'

let MessageConstructor = Vue.extend(MessageTel);
let messageInstance = null

const Message = function(options){

  messageInstance = new MessageConstructor({
    // el: document.createElement('div'),
    data: options
  })

  messageInstance.$mount();
  document.body.appendChild(messageInstance.$el);

}

// 直接调用某种类型
let typeArr = ['success', 'error', 'info']
typeArr.forEach((type) => {
  Message[type] = (options) => {
    options.type = type
    return Message(options)
  }
})

export default Message
// export default {
//   install(vue) {
//     vue.prototype.$message = Message
//   }
// }