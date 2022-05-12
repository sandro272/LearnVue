import axios from 'axios'
import { nanoid } from 'nanoid'
const personOptions = {
    namespaced: true,
    actions: {
        addPersonLi(context, value){
            if(value.name.indexOf('李') === 0){
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须为李')
            }
        },

        addServerData(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id:nanoid(), name: response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value){
            console.log("mutations中的ADD_PERSON被调用了")
            state.personList.unshift(value)                     // 此处value是一个person对象
        }
    },
    state: {
        personList: [{id:"01", name:"Alex"}]
    },
    getters: {
        firstPersonName(state){
                return state.personList[0].name
        }
    }
}

export default personOptions