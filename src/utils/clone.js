// 简易版
export function clone(target,deep=false){
    return deep ? JSON.parse(JSON.stringify(target)) : target
}
let oldObj = {x:new Date(), y:2}
let newObj = clone(oldObj, true)
newObj.y = 3
console.log('newObj', newObj);
console.log('oldObj', oldObj);