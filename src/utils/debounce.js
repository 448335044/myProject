let fn = () => console.log("触发了防抖")
debounce(fn, 1000)     //通过闭包，返回的是一个新函数，timer变量被保存起来了

// 使用场景
// let Input = document.querySelector('input');
// // Input.onkeydown = function(e) {
// //     console.log(e.keyCode)
// // }
// Input.onkeydown = debounce(function(e) {
//     console.log(e.keyCode)
// }, 1000)
// 使用场景


export function debounce(callback, time) {
    // 定时器变量
    let timer = null;
    // 返回一个函数
    return function(e) {
        // 以后每次点击，之前的timer被赋值了，先清空定时器，再启动新的定时器
        if (timer !== null) {
            clearTimeout(timer);
        }
        // 启动定时器
        timer = setTimeout(() => {
            // 执行回调
            callback.call(this, e);
            // 重置计时器变量
            timer = null;
        }, time)
    }
}