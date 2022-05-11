// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Details from '../pages/Details'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'relation',
            path: '/about',
            component: About,
            meta: {title: '相关'}                       // 路由元
        }, 
        {
            name: 'homepage',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'info',
                    path: 'message',
                    component: Message,
                    meta: {title: '信息', isAuth: true},
                    children: [
                        {
                            name: 'concrete',
                            // 此种写法对应下面props中的第一二种写法
                            // path: 'details/:id/:title',

                            // 此种写法对应下面props中的第三种写法
                            path: 'details',
                            meta: {title: '详情', isAuth: true},
                            component: Details,

                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Details组件
                            // props: {a: 888, b: "卡哇伊"}

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件接收到的所有params参数，以props的形式传给Details组件
                            // props: true

                            // props的第三种写法，值为函数
                            props($route){
                                return {id: $route.query.id, title: $route.query.title}
                            }
                        }
                    ]
                }, 
                {
                    name: 'journalism',
                    path: 'news',
                    meta: {title: '新闻', isAuth: true},
                    component: News
                }
            ]
        }
    ]
})

// 全局前置路由守卫 --- 初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log("前置路由守卫", to, from)
    if(to.meta.isAuth){                                    // 判断是否需要鉴权 权限问题
        if(localStorage.getItem('school') === 'YNU'){
            next()
        }else{
            alert('学校名不对，无权限查看')
        }
    }else{
       next() 
    }
})

// 全局后置路由守卫 --- 初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
        console.log('后置路由守卫', to, from),
        document.title = to.meta.title || '硅谷'
})


export default router