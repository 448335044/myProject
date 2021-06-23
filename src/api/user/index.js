import request from '../../http/index';


export default { 
    /**
     * 用户查询
     */
    search_user_h5: param => {
        return request.h5({
            auth: 'yes',  // 该接口是否需要登录权限  添加 opt.headers.Authorization 
            method: 'GET',
            url: '/fruits',
            signId: ["phoneId","user"],
            // headers: {'content-type': "application/json"},    //网关不支持application/json
            data: {
                phoneId: 123456,
                ...param
            }
        });
    },

};
