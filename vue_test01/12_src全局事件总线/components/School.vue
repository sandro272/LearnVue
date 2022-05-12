<template>
  <div class = "sch">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>

    export default {
        name: "School",
        props: ['getSchoolName'],
        data() {
            return {
                name: "YNU",
                address: 'KM'
            }
        },
        mounted(){
            // console.log("School", this.x)

            // 给X绑定hello事件，有人触发这个事件就执行箭头函数
            // this.x.$on("hello", (data)=>{
            //     console.log("我是School组件，收到了数据", data)
            // })

            this.$bus.$on("hello", (data)=>{
                console.log("我是School组件，收到了数据", data)
            })
        },
        beforeDestroy(){
            this.$bus.$off("hello")
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