<template>
  <div class = "stu">
      <h2>学生姓名：{{name}}</h2>
      <h2>性别：{{sex}}</h2>
      <h2 @click="add">number:{{number}}</h2>
      <button @click="sendStudentName">将学生名发送给App</button>
      <button @click="unbind">解绑</button>
      <button @click="destroyStu">销毁当前student组件实例(vc)</button>
  </div>
</template>

<script>
    export default {
        name: "Student",
        data() {
            return {
                name: "张三",
                sex: '男',
                number: 0
            }
        },
        methods:{
            add(){
                console.log("add回调被调用了")
                this.number++
            },
            sendStudentName(){
                // 触发Student组件实例身上的flower事件
                this.$emit("flower", this.name)
                // this.$emit("demo")
            },
            unbind(){
                this.$off("flower")                  // 解绑一个自定义事件
                // this.$off(["flower", "demo"])             // 解绑多个自定义事件
                // this.$off()                             // 解绑全部自定义事件
            },

            destroyStu(){
                this.$destroy()                         //  销毁了当前student组件的实例，销毁后所有student实例的自定义事件全都不奏效了
            }
        }
    }
</script>

<style scoped lang = "css">
    .stu {
        background-color: orange;
        padding: 3%;
        margin-top: 1%;
    }

</style>