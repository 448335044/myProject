let fn = () => console.log("触发了节流")
throttle(fn, 1000)     //通过闭包，返回的是一个新函数，timer变量被保存起来了

// 使用场景
// let Input = document.querySelector('input');
// // Input.onkeydown = function(e) {
// //     console.log(e.keyCode)
// // }
// Input.onkeydown = throttle(function(e) {
//     console.log(e.keyCode)
// }, 1000)
// 使用场景

export function throttle(callback, time, _this = this) {
     // 定义开始时间
     let start = 0;
     return function(e) {
         // 获取当前时间戳
         let now = Date.now();
         if (now - start >= time) {
             // 若满足条件,则执行回调函数
             callback.call(_this, e);
             // 修改开始时间
             start = now;
         }
     }
}