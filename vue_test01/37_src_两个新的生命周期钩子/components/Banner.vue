<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="forwardM">前进</button>
        <button @click="backM">后退</button>
        <button @click="goM">go测试</button>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        methods: {
            forwardM(){
                // console.log(this.$router)
                this.$router.forward()
            },
            backM(){
                this.$router.back()
            },
            goM(){
                this.$router.go(-2)                 // 传递参数，正数代表向前， 负数代表后退
            }
        }
        
    }
</script>