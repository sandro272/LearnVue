// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App'

// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)

// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
    router
})


// vue脚手架中不管import语句编写顺序，都会先执行import语句