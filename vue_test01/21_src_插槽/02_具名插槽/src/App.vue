<template>
  <div class="container">
    <category title="美食">
      <img slot="center-part" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="barbecue">
      <a class="more" slot="footer-part" href="https://m.ecook.cn/">更多美食</a>
    </category>

    <category title="游戏">
      <ul slot="center-part">
            <li v-for = "(g, index) in games" :key="index">{{g}}</li>
      </ul>
      <div slot="footer-part" class="more">
        <a href="https://m.ecook.cn/">单机游戏</a>
        <a href="https://m.ecook.cn/">网络游戏</a>
      </div>
    </category>

    <category title="电影">
        <video slot="center-part" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <!-- 在template标签里面写slot时不用写成slot="footer-part" -->
      <template v-slot:footer-part>            
        <div class="more">
          <a href="https://m.ecook.cn/">经典</a>
          <a href="https://m.ecook.cn/">热门</a>  
          <a href="https://m.ecook.cn/">推荐</a>
        </div>
        <h4>欢迎观看</h4>
      </template>
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
  .container, .more {
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
  h4 {
    text-align: center;
  }
  
</style>
