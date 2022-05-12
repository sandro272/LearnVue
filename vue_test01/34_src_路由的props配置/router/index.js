// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Details from '../pages/Details'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name: 'relation',
            path: '/about',
            component: About
        }, 
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'concrete',
                            // 此种写法对应下面props中的第一二种写法
                            // path: 'details/:id/:title',

                            // 此种写法对应下面props中的第三种写法
                            path: 'details',

                            component: Details,

                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Details组件
                            // props: {a: 888, b: "卡哇伊"}

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件接收到的所有params参数，以props的形式传给Details组件
                            // props: true

                            // props的第三种写法，值为函数
                            // props($route){
                            //     return {id: $route.query.id, title: $route.query.title}
                            // }

                            // props({query}){
                            //     return {id:query.id, title:query.title}
                            // }

                            props({query: {id, title}}){
                                return {id, title}
                            }

                        }
                    ]
                }, 
                {
                    path: 'news',
                    component: News
                }
            ]
        }
    ]
})