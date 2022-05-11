<template>
    <li>
        <label>
            <input type = "checkbox" :checked = "todo.completed" @change = 'handleCheck(todo.id)'>
            <span v-show="!todo.isEdit">{{todo.name}}</span>
            <input  type="text"
                    v-show="todo.isEdit"
                   :value="todo.name"
                   @blur="handleBlur(todo, $event)"
                   ref="inputTitle"
                   >
        </label>

        <button class = "btn btn-danger" @click='deleteCheck(todo.id)'>删除</button>
        <button class = "btn btn-edit" v-show="!todo.isEdit" @click="editTodo(todo)">编辑</button>
    </li>
</template>

<script>
    import pubsub from "pubsub-js"
    export default {
        name: "UserItem",

        // 声明接收todo对象
        props:['todo'],
       
        methods: {
            // 通知App组件将对应的todo对象的 completed 值取反               勾选和取消勾线
            handleCheck(id){
                this.$bus.$emit("checkTodos", id)
            },

            // 删除
            deleteCheck(id){
                if(confirm("确认删除吗？")){
                    pubsub.publish("deleteTodos", id)                          // 消息订阅与发布     订阅消息消息名
                }
            },

            // 编辑
            editTodo(todo){
                // todo.isEdit = true
                // 如果todo身上有isEdit
                if(todo.hasOwnProperty('isEdit')){
                    todo.isEdit = true
                }else{
                    console.log("如果todo身上没有isEdit")
                    this.$set(todo, "isEdit", true)
                }

                this.$nextTick(function(){
                    this.$refs.inputTitle.focus()
                })

             
            },

            // 失去焦点回调(真正执行修改逻辑)
            handleBlur(todo, e){
                todo.isEdit = false
                if(e.target.value.trim()){
                    return alert("不能为空")
                }
                this.$bus.$emit("updateTodo", todo.id, e.target.value)
            }
        }

    }
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label{
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none
    }

    /* 鼠标悬浮效果 */
    li:hover{
        background-color: #ddd;
    }

    li:hover button{
        display: block;
    }

</style>