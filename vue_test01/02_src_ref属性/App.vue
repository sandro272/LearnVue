<template>
  <div>
    <!-- <h2 v-text = "msg" id = "title"></h2> -->
    <h2 v-text = "msg" ref = "title"></h2>
    <button @click = "showDom" ref = "btn">点我显示上方的Dom元素</button>
    <School ref = "sch"/>
  </div>
</template>

<script>
    // 引入School组件 
    import School from './components/School.vue'
    export default {
        name: 'App',
        components: {School},
        data() {
          return {
            msg: "Welcome to here"
          }
        },
        methods: {
          showDom(){
            // console.log(document.getElementById('title'))
            // console.log(this)
            console.log(this.$refs.title)
            console.log(this.$refs.btn)
            console.log(this.$refs.sch)
          }
        }
    }
</script>