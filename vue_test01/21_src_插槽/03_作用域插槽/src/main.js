// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 导入插件
import VueResource from 'vue-resource'
Vue.use(VueResource)


// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})
