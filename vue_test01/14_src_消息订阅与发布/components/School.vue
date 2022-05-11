<template>
  <div class = "sch">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>

    import pubsub from 'pubsub-js'
    export default {
        name: "School",
        props: ['getSchoolName'],
        data() {
            return {
                name: "YNU",
                address: 'KM'
            }
        },

        methods: {
            demo(msgName, data){
                console.log("订阅来自于Student中发布的hello消息", msgName, data)
            }
        },

        mounted(){
            // console.log("School", this.x)

            // 给X绑定hello事件，有人触发这个事件就执行箭头函数
            // this.x.$on("hello", (data)=>{
            //     console.log("我是School组件，收到了数据", data)
            // })

            // this.$bus.$on("hello", (data)=>{
            //     console.log("我是School组件，收到了数据", data)
            // })

            // this.pid = pubsub.subscribe("hello", function(msgName, data){
            //     console.log(this)                                                              // 如果使用此种方式， 则this是underfine
            //     console.log("订阅来自于Student中发布的hello消息", msgName, data)
            // })


            // 第一种方式是使用箭头函数
            // this.pid = pubsub.subscribe('hello', (msgName, data)=>{
            //     console.log(this)
            //     console.log("订阅来自于Student中发布的hello消息", msgName, data)
            // })

            // 第二种方式
            this.pid = pubsub.subscribe("hello", this.demo)



        },
        beforeDestroy(){ 
            // this.$bus.$off("hello")
            pubsub.unsubscribe(this.pid)
        }
    }
</script>

<style scoped lang = "css">
    .sch {
        background-color: blanchedalmond;
        padding: 3%;
        margin-top: 1%;
    }

</style>