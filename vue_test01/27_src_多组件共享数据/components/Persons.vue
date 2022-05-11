<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
        <h3>Count组件的和为：{{sum}}</h3>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name: "Persons",
        data() {
            return {
                name: ""
            }
        },

        computed: {
            personList(){
                return this.$store.state.personList
            },
            sum(){
                return this.$store.state.sum
            }
        },

        methods: {
            add(){
                const personObj = {id: nanoid(), name: this.name}
                // console.log(personObj)
                this.$store.commit("ADD_PERSON", personObj)
                this.name=""                            // 清空输入栏中的数据
            }
        }
        
        
    }
</script>