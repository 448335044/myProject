const qs = require("qs");
// 导入crypto模块
import CryptoJSModule from '@/utils/crypto';
const CryptoJS = CryptoJSModule();

// 定义参数排序函数
function objKeySort(obj) {
    var newkey = Object.keys(obj).sort();
    var newObj = {};
    for (var i = 0; i < newkey.length; i++) {
      newObj[newkey[i]] = obj[newkey[i]];
    }
    return newObj;
}

function addSign(opt) {
    console.log('123',opt)
    if (opt.signId && opt.signId.length > 0) {
        opt.data.sign = generateSign(opt.signId, opt.data);
    }
    return opt;
}

function generateSign(keys, obj, toUpper = true) {
    let appSecret = 'JHBjb4ebs66jhUBbsb7ssb'
    let appKey = "hbkj3H8k";
    let now = Date.now();
  
    let rawParams = {
      // appKey:'hbkj3H8k',
      // nonce: 'fwldksmogddbdb9',
      // timestamp: 1624871127508
      ...obj
    }

    let finalStr = qs.stringify(objKeySort(rawParams))
    console.log("排序后参数:", finalStr)

    const hmac = CryptoJS.HmacSHA256(finalStr, appSecret);
    let sign = CryptoJS.enc.Hex.stringify(hmac);
    console.log("生成的签名:", sign)
  
    return sign
}

export {
    addSign,
};