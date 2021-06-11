export function get(target, path, notValue = undefined) {
    return getIn(target, path.split('.'), notValue)
}

function getIn(target, keyPaths, notValue) {
    let key;
    for(let i=0; i<keyPaths.length; i++) {
        key = keyPaths[i]   //每一层的对象解构
        if (target && Object.hasOwnProperty.call(target, key)) {
            target = target[key];
        } else {
            return notValue;
        }
    }

    return target
}

// let a = {
//     b:{
//         c:{
//             d:1
//         },
//         e:{
//            f:2 
//         }
//     }
// }

// console.log(get(a , 'b.r', '没找到值'));
