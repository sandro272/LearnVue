// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)


import countOptions from './count'
import personOptions from './person'



const store = new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    } 
})


// 暴露或导出store
export default store

