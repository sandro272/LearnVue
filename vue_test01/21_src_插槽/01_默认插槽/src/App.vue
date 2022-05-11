<template>
  <div class="container">
    <category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="barbecue">
    </category>

    <category title="游戏">
      <ul v-for = "(g, index) in games" :key="index">
            <li>{{g}}</li>
      </ul>
    </category>

    <category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </category>

  </div>
</template>
  
<script>
    import Category from './components/Category.vue'
    export default {
        name: 'App',
        components: {Category},
        data() {
          return {
            foods: ["烧烤", "火锅", "干锅", "面包", "饼干"],
            games: ["王者", "绝地而生", "QQ飞车", "欢乐斗地主", "阴阳师"],
            films: ["长津湖", "中国机长", "社内相亲", "八佰", "倒数时刻"]
          }
        },
        
    }
</script>

<style lang="css">
  .container {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 80%;
    height: 70%;
    margin-left: 9%;
  }

  video {
    width: 80%;
    height: 70%; 
    margin-left: 9%;

  }
  
</style>
