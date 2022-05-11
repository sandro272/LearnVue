<template>
  <div class = "app">
    <h2>{{msg}}学生姓名：{{studentName}}</h2>

    <!--通过父组件给子组件传递函数类型的props实现：子给父传递函数-->
    <School :getSchoolName = "getSchoolName"/>

    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递函数（第一种写法,使用@或v-on）-->
    <!--<Student @flower="getStudent"  @demo="ml"/>  -->                                                                                  <!-- v-on: 简写为 @-->
    <!--<Student v-once:flower="love"/>-->

    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递函数（第二种写法,使用ref）-->
    <Student ref="student" @click.native="show"/> 
  </div>
</template>

<script>
    // 引入School组件 
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    
    export default { 
        name: 'App',
        components: {Student, School},
        data() {
          return {
            msg: "你好！！！",
            studentName: ''
          }
        },
        methods:{
            getSchoolName(name){
                console.log("App获取school的名称,", name)
            },


            getStudent(name){                         // getStudent(name, ...params) 后面...params是将多个形参以数组形式传入
              console.log("花开花爱！！", name),
              this.studentName = name
            },


            ml(){
              console.log("demo事件被触发了！！！")
            },

            show(){
              alert("原生")
            }
        },
        mounted(){
          this.$refs.student.$on("flower", this.getStudent)                    // 绑定自定义事件

          // this.$refs.student.$on("flower", (name) => {
          //   // console.log(this)
          //   this.studentName = name
          // })

          // setTimeout(() => {
          //   // this.$refs.student.$once("flower", this.getStudent)                    // 绑定自定义事件，隔2000毫秒以后触发一次
          //   this.$refs.student.$on("flower", this.getStudent)
          // }, 2000)
        }
    }
</script>

<style lang="css">
  .app{
    color: brown;
    background-color: darkslategrey;
    padding: 2%;
    margin-top: 3%;
  }
  
</style>