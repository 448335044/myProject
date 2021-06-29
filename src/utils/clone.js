
let a =[{
  c: 123,
  cc: new Date()
},
456] 
    
  
 export default function clone(p) {
    if (typeof p !== 'object' || p === null) return p
    if (p instanceof RegExp) return new RegExp(p); //正则表达式的情况
    if (p instanceof Date) return new Date(p); //日期对象的情况
    if (typeof p == 'Function') return new Function(p); //函数的情况

    //[].__proto__.constructor=Array()
    //{}.__proto__.constructor=Object()
    //因此处理数组的情况时,可以妙用这个办法来new新对象
    var obj = new p.constructor;
    for (const key in p) {
      if (Object.hasOwnProperty.call(p, key)) {
        obj[key] = clone(p[key]);
      }
    }
    return obj
  }
  
  let newa = clone(a)
  
  // newa.b.cc = 999
  
  console.log('a', a);
  console.log('newa', newa);



