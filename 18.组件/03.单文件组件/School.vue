<template>
    <!-- 组件结构 -->
    <div class = "demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click = "showX">点我</button>
    </div>
</template>

<script>
    // 与组件相互交互的代码(数据、方法等等)
    // const school = Vue.extend({                 
    //     name: "学校",
    //     data(){
    //         return {
    //             schoolName: "YNU",
    //             address: "KM"
    //         }
    //     },
    //     methods: {
    //         showX(){
    //             console.log(this)
    //         }
    //     },
    // })


    // 简写形式
     export default {                 
        name: "School",
        data(){
            return {
                schoolName: "YNU",
                address: "KM"
            }
        },
        methods: {
            showX(){
                console.log(this)
            }
        },
    }


    // 暴露三种方式
    //  export const school = Vue.extend({})                   // 分别暴露        引入的方式是： import {xxx} from xxx
    // export {school}                                         // 统一暴露        引入的方式是： import {xxx} from xxx
    // export default school                                   // 默认暴露        引入的方式是： import xxx from xxx

</script>


<style>
    /* 组件的样式 */
    .demo{
        background-color: bisque;
    }
</style>