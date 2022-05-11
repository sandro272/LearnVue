<template>
  <div class = "demo">
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>性别：{{sex}}</h2>
      <h2>学院：{{academy}}</h2>
      <h2>年龄：{{myAge + 1}}</h2>
      <button @click = "updateAge">点我修改年龄</button>
  </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            msg: "学生信息：",
            // name: "张三",
            // sex: "男",
            // academy: "information",
            myAge: this.age
        }
    },

    methods: {
        updateAge(){
            // console.log(this)              // 此处的this是VueComponents
            this.myAge++
        }
    },


    // 第一种方式：简单的声明接受
    props:['name', 'sex', 'academy', 'age']


    // 第二种方式：接收的同时对数据类型进行限制
    // props: {
    //     name: String,
    //     sex: String,
    //     academy: String,
    //     age: Number
    // }


    // 第三种方式：接收的同时对数据：进行类型限定 + 默认值的指定 + 必要性的限制
    // props: {
    //     name: {
    //         type: String,                   // name的类型是字符串
    //         required: true                  // name是必要的                   
    //     },
    //     age: {
    //         type: Number,
    //         default: 100                     // 默认值
    //     },
    //     sex: {
    //         type: String,
    //         required: true
    //     },
    //     academy: {
    //         type: String,
    //         required: true
    //     }
    // } 


}
</script>

<style>
    .demo{
        background-color: bisque;
    }

</style>