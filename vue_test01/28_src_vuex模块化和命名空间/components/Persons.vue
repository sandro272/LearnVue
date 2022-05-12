<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addLi">添加一个姓李的</button>
        <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
        <h3>Count组件的和为：{{sum}}</h3>
        <button @click="addServerData">点击添加来自服务器的数据</button>
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
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }
        },

        methods: {
            add(){
                const personObj = {id: nanoid(), name: this.name}
                // console.log(personObj)
                this.$store.commit("personAbout/ADD_PERSON", personObj)
                this.name=""                            // 清空输入栏中的数据
            },

            addLi(){
                const personObj = {id: nanoid(), name: this.name}
                this.$store.dispatch("personAbout/addPersonLi", personObj),
                this.name=""

            }, 

            addServerData(){
                this.$store.dispatch("personAbout/addServerData")
            }
        },
        mounted(){
            console.log("$$", this.$store)
        }

        
        
    }
</script>