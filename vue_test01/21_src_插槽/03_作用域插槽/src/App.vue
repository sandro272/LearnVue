<template>
  <div class="container">
    
    <category title="游戏">
        <template scope="hhh">
          <!-- {{hhh.ga}} -->
          <ul>
              <li v-for = "(g, index) in hhh.ga" :key="index">{{g}}</li>
          </ul>
        </template>
    </category>


    <category title="游戏">
      <template scope="{ga}">
        <ol>
            <li style="color:red" v-for="(g, index) in ga" :key="index">{{g}}</li>
        </ol>
      </template>
    </category>


    <category>
      <template slot-scope="{ga}">
        <h3 v-for="(g, index) in ga" :key="index">{{g}}</h3>
      </template>
    </category>
  
  </div>
</template>
  
<script>
    import Category from './components/Category.vue'
    export default {
        name: 'App',
        components: {Category}
        
    }
</script>

<style lang="css">
  .container{
    display: flex;
    justify-content: space-around;
  }
  
</style>
