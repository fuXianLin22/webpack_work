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
    module: {
        rules: [ // loader的规则
            {
                test: /\.css$/i, // 匹配所有的css文件
                // use数组里从右向左运行
                // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
                // 再用 style-loader 将样式, 把css插入到dom中
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
                use: ["style-loader", "css-loader", 'less-loader']
            },
        ]
    }
}