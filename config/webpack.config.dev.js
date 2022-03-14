const path = require('path');
console.log('正在编译开发环境...', path.resolve(__dirname, '..'));
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
// 引入开发环境常量
const environment = require('./env/dev.env');
// module Name
let moduleName = process.env.moduleName
console.log(moduleName);
// const argv = require('minimist')(process.argv.slice(2));
// if (argv && argv.env && argv.env.module) {
//   moduleName = argv.env.module;
//   console.log("---------------")
//   console.log(moduleName)
//   console.log("---------------")
// } else {
//   throw new Error('A module must be specified to build!');
// }

// 开发环境的配置和公共的配置合并
const webpackConfig = webpackMerge.merge(commonConfig, {
  mode: 'development',
  // entry: './src/main.js',
  // 按模块打包
  entry: `./src/projects/${moduleName}/entry.js`,
  output: {
    filename: 'myMain.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/app",
    // clean: true,
  },
  plugins: [
    // EnvironmentPlugin 可动态切换环境，便于使用不同环境定义的常量， 和definePlugins差不多
    new webpack.EnvironmentPlugin(environment),
  ],
  devServer: {
    host: '192.168.100.207',
    contentBase: '../dist',
    inline: false,
    historyApiFallback: {
      index: '/app/index.html' //与output的publicPath
    },
    // open: false,  // 自动打开浏览器
  },
}) 

module.exports = webpackConfig;