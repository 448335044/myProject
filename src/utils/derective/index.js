// require.context(directory, useSubdirectories = false, regExp = /^.//)
//      第一个参数目标文件夹
//      是否查找子集 true | false
//      正则匹配


import Vue from 'vue'
const rcFun = require.context('./modules', true, /\.js$/)  // 深度引入
// rcFun.keys())  ./文件名的数组
let modules = {}
let paths = rcFun.keys()
paths.forEach(path => {
  const modleContent = rcFun(path)
  //   modleContent：文件内容暴露出来的对象，默认加了key是default     
  //   结构：default: {
  //            bind: (el, binding, vnode) {}
  //         }
  //           
  let fragmentPath = path.split('/')
  let fileName = fragmentPath[fragmentPath.length - 1].split('.js')[0]
  modules[fileName] = modleContent.default
})

Object.keys(modules).forEach(key => {
  // 全局注册指令
  Vue.directive(key, modules[key])
})



// 指令钩子
// bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
// inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
// update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
// componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
// unbind: 只调用一次， 指令与元素解绑时调用。

// 钩子参数
// el: 指令所绑定的元素，可以用来直接操作 DOM 。
// binding: 一个对象，包含以下属性：
// name: 指令名，不包括 v- 前缀。
// value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
// oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
// expression: 绑定值的表达式或变量名。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
// arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
// modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
// vnode: Vue 编译生成的虚拟节点。
// oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

