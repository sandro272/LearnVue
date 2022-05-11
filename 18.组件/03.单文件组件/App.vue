<template>
  <div>
      <School></School>
      <Student></Student>
  </div>
</template>

<script>
    // 汇总所有的组件 

    // 引入组件
    import School from "./School.vue"
    import Student from "./Student.vue"

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