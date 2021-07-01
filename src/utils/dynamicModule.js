// require.context(directory, useSubdirectories = false, regExp = /^.//)
//      第一个参数目标文件夹
//      是否查找子集 true | false
//      正则匹配

export default function(rcFun) {
// export function dyModules(pathName) {
    // const rcFun = require.context(pathName, true, /\.js$/)  // 深度引入

    // rcFun.keys())  ./文件名的数组
    let modules = {}
    let paths = rcFun.keys()
    paths.forEach(path => {         
    let fragmentPath = path.split('/')
    let fileName = fragmentPath[fragmentPath.length - 1].split('.js')[0]
    modules[fileName] = rcFun(path).default    // 将对应文件中的内容挂载到modules对象上
    //   rcFun(path)：文件内容暴露出来的对象，默认加了key是default     
    //   结构：default: {
    //            bind: (el, binding, vnode) {}
    //         }
    //  
    })
    return modules
}