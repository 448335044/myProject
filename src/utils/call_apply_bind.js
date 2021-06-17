Function.prototype._call = function(obj = window, ...args){
    console.log('args', args);
    console.log('我的call',obj);
    console.log(this);  //  fn目标函数
  
    obj._thisFn = this
    let res = obj._thisFn(...args)  // 执行fn目标函数，此时目标函数中的this为obj
    delete obj._thisFn
    return res
  }
  
  function fn(a,b,c){
    console.log('a', a);   // 1
    console.log('b', b);   // 2
    console.log('c', c);   // 3
    console.log('自定义fn函数', this)   //  {'a' : 111}
  }
  
  let obj = {'a' : 111}
  fn._call(obj,1,2,3)


//   ---------------------------------------------------------

Function.prototype._apply = function(obj = window, args){     //   此时args就是一个数组，不需要...运算符
    console.log('args', args);
    console.log('我的call',obj);
    console.log(this);  //  fn目标函数
  
    obj._thisFn = this
    let res = obj._thisFn(...args)  // 执行fn目标函数，此时目标函数中的this为obj
    delete obj._thisFn
    return res
  }
  
  function fn(a,b,c){
    console.log('a', a);   // 1
    console.log('b', b);   // 2
    console.log('c', c);   // 3
    console.log('自定义fn函数', this)   //  {'a' : 111}
  }
  
  let obj = {'a' : 111}
  fn._apply(obj, [1,2,3])   //调用时第二个参数为数组

  // ---------------------------------------------------------------

  Function.prototype._bind = function(obj = window, ...args){
    console.log('args', args);
    console.log('我的call',obj);
    console.log(this);  //  fn目标函数
  
    let _thisFn = this
    return function () {
        return _thisFn._call(obj, ...args)
    }
  }
  
  function fn(a,b,c){
    console.log('a', a);   // 1
    console.log('b', b);   // 2
    console.log('c', c);   // 3
    console.log('自定义fn函数', this)   //  {'a' : 111}
  }
  
  let obj = {'a' : 111}
  fn._bind(obj,1,2,3)

//   思路：
// _bind要返回新函数，return一个包裹着旧函数调用的新函数即可
function bind () {
  var target = this  //原函数
  return function () {
    return target()
  }
}
// 新函数的this要指向_bind的第一个参数，用之前_call函数就可以达成目标
function bind (obj) {
  var target = this  //原函数
  return function () {
    return target.call(obj)
  }
}