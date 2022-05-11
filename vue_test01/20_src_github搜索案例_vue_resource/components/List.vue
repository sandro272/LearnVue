<template>
    <div class="row">

        <!-- 展示用户列表 -->
      <div class="card" v-show="info.userArr.length" v-for="user in info.userArr" :key="user.login">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width:100px"/>   
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
      <!-- 展示欢迎词 -->
      <p v-show="info.isFirst">欢迎使用！</p>

      <!-- 展示加载 -->
      <p v-show="info.isLoading">加载中...</p>

      <!-- 展示错误信息 -->
      <p v-show="info.errMsg">{{info.errMsg}}</p>

      
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                info: {
                    isFirst: true,                  // 是否为第一次使用
                    isLoading: false,              // 是否在加载中
                    errMsg: '',
                    userArr: []
                }
            }
        },
        mounted(){
            this.$bus.$on('getUsersObj', (usersObj) => {
                    console.log('我是List组件，接收到了数据：')
                    this.info = {...this.info, ...usersObj}                           // 合并两个集合，重名的以后面集合为主
                    // this.info = usersObj
                    console.log(this)
            })
        }

    }
</script>

<style lang="css" scoped>
  .album {
        min-height: 50rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: antiquewhite;
    }

    .row {
        margin-top: 2%;
    }

    .card {
        float: left;
        width: 33.33%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }
  
</style>