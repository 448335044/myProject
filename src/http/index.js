// import { get } from '@/utils';
import rawRequest from './raw-request';
import transformers from './transformers/index';
import addAuthorization from './transformers/addAuthorization';

function request_gateway(transform, config, retry = true) {
  return addAuthorization(config).then(opt => {
    opt = transform(opt);
    return rawRequest(opt).then(res => {
      console.log('拿到结果', res);
      const body = res.body;
      // const code = get(body, 'res.code');
      const code = res.statusCode;

      return body
      // 响应拦截
      // if(code !== 200){
      //   return body
      // } else{
      //   this.$message({
      //     type: 'info',
      //     content: '请求出错，要不再来一次',
      //     duration: 1000
      //   })
      // }
      
    });
  });
}

export default {
  h5: request_gateway.bind(null, transformers.h5),
  wx: request_gateway.bind(null, transformers.wx),
  pc: request_gateway.bind(null, transformers.pc),
};
