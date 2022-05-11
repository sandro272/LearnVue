<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name your search" v-model="keyWords"> &nbsp; 
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Search",
        data() {
            return {
                keyWords: ''
            }
        },
        methods: {
            searchUsers(){
                // 请求前更新list中的数据
                this.$bus.$emit('getUsersObj', {isFirst:false, isLoading:true, errMsg:'', userArr:[]})
                axios.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
                    response => {
                        console.log("请求成功了！"),
                        // this.$bus.$emit('getUsers', response.data.items)

                        // 请求成功后更新list中的数据
                        this.$bus.$emit('getUsersObj', {isLoading:false, errMsg:'', userArr:response.data.items})
                    },
                    error => {
                        console.log("请求失败了！")
                        this.$bus.$emit('getUsersObj', {isLoading:false, errMsg:error.message, userArr:[]})
                    }
                )
            }
        }
    }
</script>