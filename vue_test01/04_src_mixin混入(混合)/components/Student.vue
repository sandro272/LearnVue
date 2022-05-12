<template>
  <div class = "demo">
      <h2 @click = "showName">学生姓名：{{name}}</h2>
      <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
    // 局部混入
    // import {mix, mix01} from '../mixin'

    export default {
        name: "Student",
        data() {
            return {
                name: "张三",
                sex: '男',
                x: 666                     // 就近原则
            }
        },
        // mixins: [mix, mix01],
        // mounted(){                                  // 整合在一起
        //     console.log("找到了解药！！")
        // }
    }
</script>

<style>
    .demo{
        background-color: bisque;
    }

</style>