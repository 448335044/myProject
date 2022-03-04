# 使用 postcss-pxtorem
1.安装依赖
    npm install postcss-loader postcss-pxtorem --save-dev

2.根目录新建配置文件postcss.config.js
    配置项：
    module.exports = {
        plugins: [
            require('postcss-pxtorem')({
                rootValue: 16,
                minPixelValue: 1,
                propWhiteList: []     //括号中可指定某些属性转换，不写默认所有
            })
        ]
    }

3.本项目没有用脚手架，是自己用webpack搭建的，所以需要在webpack中配置lorder
  在使用对应的css或css预处理器的lorder后面添加postcss-lorder，否则不生效
  如： use: ['style-loader','css-loader','less-loader', 'postcss-loader']
11111111111
readme copy.md111111111
