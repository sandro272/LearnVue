<template>
    <li>
        <label>
            <input type = "checkbox" :checked = "todo.completed" @change = 'handleCheck(todo.id)'>

            <!-- 如下代码也能实现功能，但是不太建议，因为有点违反原则，一位内修改了props -->
            <!-- <input type = "checkbox" v-model = "todo.completed">      -->
            <span>{{todo.name}}</span>
        </label>
        <!-- <button class = "btn btn-danger" style = "display:none">删除</button> -->
        <button class = "btn btn-danger" @click = 'deleteCheck(todo.id)'>删除</button>
    </li>
</template>

<script>
    export default {
        name: "UserItem",

        // 声明接收todo对象
        props:['todo'],
        // mounted(){
        //     console.log(this.todo)
        // }
        methods: {
            // 通知App组件将对应的todo对象的 completed 值取反               勾选和取消勾线
            handleCheck(id){
                // console.log(id)
                // this.checkTodos(id)
                this.$bus.$emit("checkTodos", id)
            },

            // 删除
            deleteCheck(id){
                if(confirm("确认删除吗？")){
                    // console.log("通知App删除对应的item")
                    // this.deleteTodos(id)
                    this.$bus.$emit("deleteTodos", id)
                }
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