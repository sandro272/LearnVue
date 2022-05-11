// 是一个可选的配置项文件

module.exports = {
    pages: {
        index: {
            // 入口
            entry: 'src/main.js',
        }   
    },
    lintOnSave: false,
    // 开启代理服务器(方式一)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },

    // 开启代理服务器(方式二)
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            pathRewrite: {'^/api': ''},
            ws: true,                                     // 用于支持websocket
            changeOrigin: true                            // 用于控制请求头中的host值
          },
          '/demo': {
            target: 'http://localhost:5000',
            pathRewrite: {'^/demo': ''},
            ws: true,                                     
            changeOrigin: true                            
          },
        }
    }
}