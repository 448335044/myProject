import Vue from 'vue'
import MessageTel from './Toast.vue'

let MessageConstructor = Vue.extend(MessageTel);
let messageInstance = null

const Message = function(options){
  console.log('options', options);
  messageInstance = new MessageConstructor({
    data: options
  })

  messageInstance.$mount();
  document.body.appendChild(messageInstance.$el);
}


export default Message

// export default {
//   install(vue) {
//     vue.prototype.$mymessage = Message
//   }
// }