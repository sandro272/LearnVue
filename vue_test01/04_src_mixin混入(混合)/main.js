// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App'

// 全局混入
import {mix, mix01} from './mixin'

// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.mixin(mix)
Vue.mixin(mix01)

// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App)
})
