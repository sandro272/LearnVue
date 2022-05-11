<template>
    <div class="category">
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大为:{{expansion}}</h3>
        <h3>我在{{school}},科目为{{subject}}</h3>
        <h3>Persons组件信息为：</h3>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(num)">+</button>
        <button @click="decrement(num)">-</button>
        <button @click="incrementOdd(num)">当前求和为奇数再加</button>
        <button @click="incrementWait(num)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: "Count",
        data() {
            return {
                num: 1,             // 用户选择的数字
                
            }
        },
        computed: {
            
           // 借助mapState生成计算属性，从state中读取数据（数组写法）
            ...mapState(['sum', 'school', 'subject', 'personList']),

            // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
            ...mapGetters(['expansion'])
        },
        methods: {

           // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
           ...mapMutations({increment:"ADDITION", decrement:"MINUS"}),

           // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
            ...mapActions({incrementOdd:"additionOdd", incrementWait:"additionWait"})

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
