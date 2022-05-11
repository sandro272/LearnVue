<template>
    <div>
        <h3>这是About页面</h3>
    </div>
</template>

<script>
    export default {
        name: "About",
        // beforeDestroy(){
        //     console.log("About组件即将被销毁")
        // },
        // mounted(){
        //     console.log("About组件挂载完毕", this)
        //     window.homeRoute = this.$route
        //     window.homeRouter = this.$router
        // }

        // 通过路由规则，进入该组件时被调用
        beforeRouteEnter (to, from, next) {
            console.log("aAbout----beforeRouteEnter")
            if(to.meta.isAuth){                                    // 判断是否需要鉴权 权限问题
                if(localStorage.getItem('school') === 'YNU'){
                    next()
                }else{
                    alert('学校名不对，无权限查看')
                }
            }else{
            next() 
            }
        },

        // 通过路由规则，离开该组件时被调用
        beforeRouteLeave (to, from, next) {
            console.log("aAbout----beforeRouteLeave")
            next()
            
        }
        
    }
</script>