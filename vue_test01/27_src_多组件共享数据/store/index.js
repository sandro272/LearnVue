// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions-用于响应组件中的动作
const actions = {

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
        console.log("mutations中的ADDITION被调动了", state, value),
        state.sum += value
        
    },
    MINUS(state, value){
        console.log("mutations中的MINUS被调用了")
        state.sum -= value
    },

    ADD_PERSON(state, value){
        console.log("mutations中的ADD_PERSON被调用了")
        state.personList.unshift(value)                     // 此处value是一个person对象
    }
}

// 准备state-用于存储数据
const state = {
    sum: 5,              // 当前的和
    school: "尚硅谷",
    subject: "Vue",
    personList: [{id:"01", name:"Alex"}]
}

// 准备getters-用于将state中的数据进行加工
const getters = {
    expansion(state){
        return state.sum * 10
    }
    
}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


// 暴露或导出store
export default store

