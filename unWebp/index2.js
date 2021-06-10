// let a = 20;    //变量a命名冲突报错

// 利用自执行函数-创建单独模块。
let moduleB = (function() {
    return {
        a: 20
    }
})()