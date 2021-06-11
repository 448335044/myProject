export function merge(target) {
    // Object.prototype.toString.call(target) === '[object Object]' || (target = {})
    target = isObj(target)
    for(var i=1; i<arguments.length; i++){
        // arguments[i]     后面的每一个对象
        let paramObj = arguments[i]
        // Object.prototype.toString.call(paramObj) === '[object Object]' || (paramObj = {})
        paramObj = isObj(paramObj)
        for (const key in paramObj) {
            if (Object.hasOwnProperty.call(paramObj, key)) {
                paramObj[key] !== undefined && (target[key] = paramObj[key])
            }
        }
    }
    
    return target
}

function isObj(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]' ? obj : {}
}
