const countOptions = {
    namespaced: true,
    actions: {
        additionOdd(context, value){
            if(context.state.sum % 2){
                context.commit("ADDITION", value)
            }
        },
    
        additionWait(context, value){
            setTimeout(()=>{
                context.commit("ADDITION", value)
            }, 1000)
        }
    },
    mutations: {
        ADDITION(state, value){
            console.log("mutations中的ADDITION被调动了", state, value),
            state.sum += value
            
        },
        MINUS(state, value){
            console.log("mutations中的MINUS被调用了")
            state.sum -= value
        },
    },
    state: {
        sum: 5,              // 当前的和
        school: "尚硅谷",
        subject: "Vue",
    },
    getters: {
        expansion(state){
            return state.sum * 10
        }
    }
}

export default countOptions