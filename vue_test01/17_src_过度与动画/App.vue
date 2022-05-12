<template>
  <div>
    <test/>
    <test01/>
    <test02/>
    <test03/>
  </div>
</template>

<script>
    import Test from './components/Test.vue'
    import Test01 from './components/Test01.vue'
    import Test02 from './components/Test02.vue'
    import Test03 from './components/Test03.vue'
    
    export default {
        name: 'App',
        components: {Test, Test01, Test02, Test03},
        data() {
          return {
          }
        }
    }
</script>
