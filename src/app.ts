import Vue from 'vue'
import './app.scss'
import './assets/icon/iconfont.scss'
import 'taro-ui/dist/style/index.scss'
import { eventCenter, getCurrentInstance } from '@tarojs/taro'

const App = new Vue({
  onLaunch(){
    console.log('初始化完成');
    console.log(getCurrentInstance().router.params);
  },
  onShow (options) {
    console.log('show!!!')
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
