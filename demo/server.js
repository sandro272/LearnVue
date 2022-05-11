// 引入express
const express = require('express')
const history = require('connect-history-api-fallback');

// 创建一个实例对象
const app = express()

// 配置后端路由
app.get('/person', (require, response)=>{
    response.send({                                // 向客户端发送信息
        name: "tom",
        age: 17

    })
})
app.use(history())
app.use(express.static(__dirname + '/static'))                              // 专门用于指定静态资源

// 端口监听
app.listen(5005, (err) => {
    if(!err) console.log('服务器启动成功了')
})

