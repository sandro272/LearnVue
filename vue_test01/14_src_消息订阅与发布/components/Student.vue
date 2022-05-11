<template>
  <div class = "stu">
      <h2>学生姓名：{{name}}</h2>
      <h2>性别：{{sex}}</h2>
      <button @click="sendStudentName">将学生名发送给School组件</button>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'  
    export default {
        name: "Student",
        data() {
            return {
                name: "张三",
                sex: '男',
                number: 0
            }
        },
        mounted(){
            // console.log("Student", this.x)
            
        },
        methods:{
            sendStudentName(){
                // this.$bus.$emit("hello", this.name)
                pubsub.publish("hello", 666)
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