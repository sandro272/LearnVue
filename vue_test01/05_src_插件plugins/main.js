// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App'


// 关闭Vue的生产提示
Vue.config.productionTip = false

// 引入插件
import plugins from './plugins' 

Vue.use(plugins, 1, 2, 3)

// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App)
})
