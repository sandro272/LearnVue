// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App'


// 全部引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'


// 按需引入
import { Button, Row, DatePicker} from 'element-ui'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 应用ElementUI
// Vue.use(ElementUI)

// Vue.component(Button.name, Button)
Vue.component('zc-button', Button);
Vue.component('zc-row', Row);
Vue.component('zc-date-picker', DatePicker);

// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App)
})


// vue脚手架中不管import语句编写顺序，都会先执行import语句