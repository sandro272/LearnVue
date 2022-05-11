<template>
  <div class = "demo">
      <h2>名称：{{name | mySlice}}</h2>
      <h2>地址：{{address}}</h2>
      <button @click = "test">点我显示hello方法</button>
  </div>
</template>

<script>

    export default {
        name: "School",
        data() {
            return {
                name: "YNU--hahahh",
                address: 'KM'
            }
        },
        methods: {
            test(){
                this.hello()
            }
        }
    }
</script>

<style>
    .demo{
        background-color: blanchedalmond;
    }

</style>