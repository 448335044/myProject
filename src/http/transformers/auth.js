function getAuth() {
    // 调用登录接口，获取Authorization
    return new Promise((res, rej) => {
        res({Authorization: 'token1111111111111111111111'})
    })
}

function getAuthOnce() {
    return new Promise((res, rej) => {
        res({Authorization: 'token222222222222222222222'})
    })
}

export default {
    getAuth,
    getAuthOnce
}