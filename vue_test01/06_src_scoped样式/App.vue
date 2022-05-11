<template>
  <div>
    <h2 class = "title">你好</h2>
    <School/>
    <Student/>
  </div>
</template>

<script>
    // 引入School组件 
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    
    export default {
        name: 'App',
        components: {Student, School},
    }
</script>

<style lang="css" scoped>
  .title{
    color: brown;
  }
  
</style>