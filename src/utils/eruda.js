// 使用qs工具
// import qs from 'qs'
// const { isDebug } = qs.parse(window.location.search.replace(/^\?/, ''));
// console.log(qs.parse(window.location.search.replace(/^\?/, '')))

// 用自己定义的qs工具
import myqs from './querystring'
const { isDebug } = myqs.parse(window.location.search);   // myqs.parse内部已处理掉 '?'
if(process.env.NODE_ENV !== 'production' || isDebug) {
  const eruda = require('eruda')
  eruda.init()
}