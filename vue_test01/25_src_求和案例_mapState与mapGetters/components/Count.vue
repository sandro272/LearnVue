<template>
    <div class="category">
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大为:{{expansion}}</h3>
        <h3>我在{{school}},科目为{{subject}}</h3>
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
    import {mapState, mapGetters} from 'vuex'
    export default {
        name: "Count",
        data() {
            return {
                num: 1,             // 用户选择的数字
                
            }
        },
        computed: {
            /*
            // 靠程序员自己亲手去写计算属性
            summation(){
                return this.$store.state.sum
            },
            location(){
                return this.$store.state.school
            },
            learnContent(){
                return this.$store.state.subject
            },
            */
            
            // 借助mapState生成计算属性，从state中读取数据（对象写法）
            // ...mapState({summation:'sum', location:'school', learnContent:'subject'}),                        // 将 mapState中的内容展开放入 mounted中


            /*
            sum(){
                return this.$store.state.sum
            },
            school(){
                return this.$store.state.school
            },
            subject(){
                return this.$store.state.subject
            },
            */

           // 借助mapState生成计算属性，从state中读取数据（数组写法）
            ...mapState(['sum', 'school', 'subject']),


            // upstep(){
            //     return this.$store.getters.expansion
            // }

            // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
            // ...mapGetters({upstep:'expansion'})


            // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
            ...mapGetters(['expansion'])
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
            console.log("Count", this.$store)
            // const x = mapState({summation:'sum', location:'school', learnContent:'subject'})
            // console.log(x)
        },
    }
</script>


<style lang="css">
    button {
        margin-left: 0.5%;
    }
    
</style>
