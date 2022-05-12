<template>
  <ul class = "todo-main">
     <UserItem v-for = "todoObj in todoArr" 
               :key = "todoObj.id" 
               :todo = "todoObj" />
  </ul>
</template>

<script>

    import UserItem from './UserItem.vue'

    export default {
        name: 'UserList',
        components: {UserItem},
        // 为了使UserList 和 UserHeader两兄弟之间通信，借助它们的父亲App
        // data() {
        //   return {
        //     todos: [
        //       {id: "001", name: "吃饭", completed: true},
        //       {id: "002", name: "睡觉", completed: false},
        //       {id: "003", name: "锻炼", completed: true}
        //     ]
        //   }
        // },

        // props: ['todoArr', 'checkTodos', 'deleteTodos']
        props: ['todoArr']

    }
</script>

<style scoped>
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: auto;
  }

  .todo-empty{
    height: 40px;
    line-height: 10px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>