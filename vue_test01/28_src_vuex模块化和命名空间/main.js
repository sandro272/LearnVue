// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 导入插件
import VueResource from 'vue-resource'
Vue.use(VueResource)                           // 在vc中多了$http

// 引入vuex
// import Vuex from 'vuex'
// Vue.use(Vuex)

//import store from './store/index'          // 或者 
import store from './store'

// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})


// vue脚手架中不管import语句编写顺序，都会先执行import语句