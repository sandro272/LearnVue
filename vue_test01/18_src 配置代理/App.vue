<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'App',
        methods:{
          getStudents(){
            // 开启代理服务器方式一
            // axios.get("http://localhost:8080/students").then(
            axios.get("http://localhost:8080/api/students").then(
              response => {
                console.log("请求成功啦", response.data)
              },
              error => {
                console.log("请求失败啦", error.message)
              }
            )

          },
          getCars(){
            axios.get("http://localhost:8080/demo/cars").then(
              response => {
                console.log("请求成功啦", response.data)
              },
              error => {
                console.log("请求失败啦", error.message)
              }
            )
          }
        }
        
    }
</script>
