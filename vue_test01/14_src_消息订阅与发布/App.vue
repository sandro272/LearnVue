<template>
  <div class = "app">
    <h2>{{msg}}</h2>
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
        data() {
          return {
            msg: "你好！！！",
          }
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