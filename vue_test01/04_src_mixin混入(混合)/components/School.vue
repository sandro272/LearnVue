<template>
  <div class = "demo">
      <h2 @click = "showName">名称：{{name}}</h2>
      <h2>地址：{{address}}</h2>
  </div>
</template>

<script>
    // import {mix} from '../mixin'

    export default {
        name: "School",
        data() {
            return {
                name: "YNU",
                address: 'KM'
            }
        },
        // mixins: [mix]
    }
</script>

<style>
    .demo{
        background-color: blanchedalmond;
    }

</style>