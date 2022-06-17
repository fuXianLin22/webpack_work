const path = require('path')


// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'main.js'
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
}