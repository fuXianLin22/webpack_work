import { marquee } from "./marquee";
import { tab } from "./tab";

tab()
marquee()
// 引入index.css 
import './style/index.css'
// 引入index.less
import './style/index.less'
// 引入图片
import gifSrc from "./assets/1.gif"
import pngSrc from "./assets/logo_small.png"
// 创建图片节点
const gif = document.createElement('img')
const png = document.createElement('img')
// 设置图片src属性
gif.src = gifSrc
png.src = pngSrc
// 挂载图片
document.body.appendChild(gif)
document.body.appendChild(png)
// 引入font.css
import './assets/fonts/iconfont.css'
// es6=>es5
const fn = () => {
    console.log('hello World');
}
fn()
// 挂载vue中的App
import App from './App.vue' // 根vue文件
import Vue from 'vue' // 引入vue.js对象

new Vue({ 
  render: h => h(App) // 渲染函数, 渲染App组件里的标签
}).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里