// let oldArr = [1,2,3,[4,5,[6,7,8,[9,10]]]]

export function myFlat(arr) {
  //----------------reduce 递归----------------------------- 
  return arr.reduce((result, item)=> {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);

  //----------------join(toString) and split----------------------------- 
  // return arr.join(',').split(',').map(function(item) {
  //     return parseInt(item);
  // })

  // return arr.toString().split(',').map(function(item) {
  //     return parseInt(item);
  // })

  //----------------递归------------------------------ 
  // let newArr = []
  // arr.map(item => {
  //   if(Array.isArray(item)){
  //     newArr = [...newArr, ...myFlat(item)]   //myFlat(item) 返回的是数组
  //   }else{
  //     newArr.push(item)
  //   }
  // })
  // return newArr

  //------------------while循环-----------------------
  // while(arr.some(item => Array.isArray(item))){
  //   arr = [].concat(...arr)
  // }
  // return arr

  //----------------------es6中flat---------------------- 
  // return arr.flat(Infinity)
}

// console.log('newArr', myFlat(oldArr));