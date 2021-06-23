// 主机地址(根据应用的运行环境变化)
const HOST = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8889'      // 开发环境主机地址
  : 'http://localhost:8889';     // 生产环境主机地址


export default HOST;

