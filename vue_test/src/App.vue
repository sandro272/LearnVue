<template>
  <div>
      <img src = "./assets/logo.png" alt = "logo">
      <School></School>
      <Student></Student>
  </div>
</template>

<script>
    // 汇总所有的组件 

    // 引入组件
    import School from "./components/School"
    import Student from "./components/Student"

    export default {
        name: "App",
        components: {
            // School: School,
            // Student: Student

            // 简写为
            School,
            Student

        }

    }
</script>