const path = require('path');
console.log('正在编译开发环境...', path.resolve(__dirname, '..'));
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
// 引入开发环境常量
const environment = require('./env/dev.env');
// 开发环境的配置和公共的配置合并
const webpackConfig = webpackMerge.merge(commonConfig, {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'myMain.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  plugins: [
    // EnvironmentPlugin 可动态切换环境，便于使用不同环境定义的常量， 和definePlugins差不多
    new webpack.EnvironmentPlugin(environment),
  ],
}) 

module.exports = webpackConfig;