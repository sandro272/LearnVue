// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions-用于响应组件中的动作
const actions = {
    /*
    addition: function(context, value){
        // console.log("actions中的addition被调动了", context, value),
        context.commit("addition", value)
    },
    minus(context, value){
        context.commit("minus", value)
    },
    */

    // 对应Count中的incrementOdd()的第二种写法
    additionOdd(context, value){
        // console.log(context, value)
        if(context.state.sum % 2){
            context.commit("ADDITION", value)
        }
    },

    additionWait(context, value){
        setTimeout(()=>{
            context.commit("ADDITION", value)
        }, 1000)
    }
}

// 准备mutations-用于操作数据(state)
const mutations = {
    ADDITION(state, value){
        // console.log("mutations中的addition被调动了", state, value),
        state.sum += value
        
    },
    MINUS(state, value){
        state.sum -= value
    }
}

// 准备state-用于存储数据
const state = {
    sum: 5,              // 当前的和
    school: "尚硅谷",
    subject: "Vue"
}

// 准备getters-用于将state中的数据进行加工
const getters = {
    expansion(state){
        return state.sum * 10
    }
    
}

const store = new Vuex.Store({
    // actions:actions,
    // mutations:mutations,
    // state:state     
    // 由于key和value一样可以简写成
    actions,
    mutations,
    state,
    getters
})


// 暴露或导出store
export default store

