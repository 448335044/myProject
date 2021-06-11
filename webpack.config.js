const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');//css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包

const VueLoaderPlugin = require('vue-loader/lib/plugin')
console.log('路劲', path.resolve(__dirname, 'dist'));
module.exports = {
    //  mode: 'production',
    mode: 'development',
    entry: './src/main.js',
    // entry: 'index.html',
    // entry: {
    //     index: './src/main.js',
    //     print: './src/print.js',
    // },
    output: {
        // filename: 'myMain.js',
        filename: 'myMain.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.less$/,
            use: ['style-loader','css-loader','less-loader']
          }, 
          {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
          }, 
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    'less': [
                        'vue-style-loader',
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                }
                
            }
          },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),

        // 根据指定的html文件作为模板，打包生成对应的html文件
        new HtmlWebpackPlugin({
            // chunks:['/index'],
            // filename:'index.html',

            template:'appHtml.html'  
            // template:'index.html'  
        }),

        // new ExtractTextPlugin("style.css") //提取出来的样式放在style.css文件中
    ],
    resolve: { 
      alias: { 
        vue: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src'),
      } 
    },
    devServer: {
        contentBase: './dist',
        inline: false,
        // open: false,  // 自动打开浏览器
    },
    // devServer: {
    //     port: 5000,
    //     progress: true,  // 显示打包的进度条
    //     contentBase: path.join(__dirname, './dist'),  // 根目录
    //     open: true,  // 自动打开浏览器
    //     compress: true,  // 启动 gzip 压缩
    //     hot: true,
    //     historyApiFallback:true,
    //     // 设置代理
    //     proxy: {
    //         // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
    //         '/api': 'http://localhost:3000',

    //         // 将本地 /api2/xxx 代理到 localhost:3000/xxx
    //         '/api2': {
    //             target: 'http://localhost:3000',
    //             pathRewrite: {
    //                 '/api2': ''
    //             }
    //         }
    //     }
    // },
}