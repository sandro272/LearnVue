<template>
    <div class="category">
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
    export default {
        name: "Count",
        data() {
            return {
                num: 1,             // 用户选择的数字
                
            }
        },
        methods: {
            increment(){
                // this.$store.dispatch("addition", this.num)
                // 如果将index中的actions中的addition()和minus()方法注释以后就要写成
                this.$store.commit("ADDITION", this.num)
            },
            decrement(){
                // this.$store.dispatch("minus", this.num)
                this.$store.commit("MINUS", this.num)
            },

            
            incrementOdd(){
                // 第一种写法
            //    if(this.$store.state.sum % 2){
            //        this.$store.dispatch("addition", this.num)
            //    }

               // 第二种写法
               this.$store.dispatch("additionOdd", this.num)
            },
            incrementWait(){
                this.$store.dispatch("additionWait", this.num)
    
            }
        },
        mounted() {
            console.log("Count", this)
        },
    }
</script>


<style lang="css">
    button {
        margin-left: 0.5%;
    }
    
</style>
