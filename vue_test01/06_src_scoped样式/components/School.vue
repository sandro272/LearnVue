<template>
  <div class = "demo">
      <h2>名称：{{name}}</h2>
      <h2 class = "title">地址：{{address}}</h2>
  </div>
</template>

<script>

    export default {
        name: "School",
        data() {
            return {
                name: "YNU",
                address: 'KM'
            }
        }
    }
</script>

<style scoped lang = "css">
    .demo{
        background-color: blanchedalmond;
    }

</style>