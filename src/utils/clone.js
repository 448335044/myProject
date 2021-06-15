// 简易版
// export function clone(target,deep=false){
//     return deep ? JSON.parse(JSON.stringify(target)) : target
// }
// let oldObj = {x:new Date(), y:2}
// let newObj = clone(oldObj, true)
// newObj.y = 3
// console.log('newObj', newObj);
// console.log('oldObj', oldObj);

let a = {
    b: {
      c: 123,
      cc: new Date()
    },
    d: 456
  }
export function clone(p) {
    if (typeof p !== 'object' || p === null) return p
    let obj = {}
    for (const key in p) {
      if (Object.hasOwnProperty.call(p, key)) {
        obj[key] = clone(p[key]);
      }
    }
    return obj
  }
  
  let newa = clone(a)
  
  newa.b.cc = 999
  
  console.log('a', a);
  console.log('newa', newa);