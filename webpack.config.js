const path = require('path')


// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // mode: 'development || production' production为生产环境，development为开发环境
    mode: 'development',
    entry: './src/main.js', //入口文件地址
    output: {
        path: path.join(__dirname, 'dist'),  // 出口文件地址
        filename: 'main.js'  // 出口文件名字
    },
    devServer: {
        port: 3000, // 端口号
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',  //配置index.html模板地址
            filename: 'index.html'  // 生成的文件名字
        })
    ],
}