<template>
  <div>
    <!-- <Student name = "张三" sex = "男" academy = "信息学院" age = "18"/>               
    <Student name = "李四" sex = "男" academy = "数统学院"/>
    <Student name = "李沁" sex = "女" academy = "艺术学院"/>  -->

     <!-- 在age前面加一个:,即变成 :age= "18"，获取的是引号内部的，会自动识别 -->
     <Student name = "张三" sex = "男" academy = "信息学院" :age = "18 + 1"/>
  </div>
</template>

<script>
    // 引入School组件 
    import Student from './components/Student.vue'
    export default {
        name: 'App',
        components: {Student},
    }
</script>