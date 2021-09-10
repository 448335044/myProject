const path = require('path');
console.log('正在打包生产环境...', path.resolve(__dirname, '..'));
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
// 生产环境的配置和公共的配置合并
const webpackConfig = webpackMerge.merge(commonConfig, {
  mode: 'production',
  entry: './src/main.js',
  output: {
      filename: 'myMain.js',
      path: path.resolve(__dirname, '../dist'),
      clean: true,
  },
}) 

module.exports = webpackConfig;