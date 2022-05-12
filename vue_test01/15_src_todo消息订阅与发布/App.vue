<template>
  <div id = "root">
    <div class = "todo-container">
      <div class = "todo-wrap">
        <!-- <UserHeader :receive = "receive" @事件名=回调名/> -->
        <UserHeader @receiveTodo="receiveTo" />                                     
        <!-- <UserList :todoArr = 'todos' :checkTodos = "checkTodos" :deleteTodos = 'deleteTodos'/> -->
        <UserList :todoArr = 'todos' />

        <!-- <UserFooter :todoArr = 'todos' :checkAllTodo = 'checkAllTodo' :clearAllTodo = 'clearAllTodo'/> -->
        <UserFooter :todoArr = "todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    import UserHeader from './components/UserHeader.vue'
    import UserList from './components/UserList.vue'
    import UserFooter from './components/UserFooter.vue'
    
    export default {
        name: 'App',
        components: {UserHeader, UserList, UserFooter},
        data() {
          return {
            todos: 
              // [
              //   {id: "001", name: "吃饭", completed: true},
              //   {id: "002", name: "睡觉", completed: false},
              //   {id: "003", name: "锻炼", completed: true}
              // ]
              JSON.parse(localStorage.getItem('todos')) || []
          }
        },
        methods: {
          receiveTo(x){
            // console.log('这是App接收MyHeader的数据', x)
            this.todos.unshift(x)
          },

          // 勾选或取消一个todo
          checkTodos(id){
            this.todos.forEach((todo) => {
              if(todo.id === id ){
                todo.completed = !todo.completed
              }
            })
          },

          // 删除一个todo
          deleteTodos(_, id){
            this.todos = this.todos.filter((todo) => {
              return todo.id !== id 

            })
          },

          // 全选或取消全选
          checkAllTodo(completed){
            this.todos.forEach((todo) => {
              todo.completed = completed
            })
          },

          clearAllTodo(){
            this.todos = this.todos.filter((todo) => {
              return !todo.completed
            })
          }
        },
        watch: {
          todos: {
            deep: true,
            handler(value){
              localStorage.setItem('todos', JSON.stringify(value))

            }
          }
        },
        mounted(){
          this.$bus.$on("checkTodos", this.checkTodos),
          this.pidId = pubsub.subscribe("deleteTodos", this.deleteTodos)
        },
        beforeDestroy(){
          this.$bus.$off("checkTodos"),
          pubsub.unsubscribe(this.pidId)
        }
    }
</script>

<style lang="css" scoped>
  body {
    background: #fff;
  }

  .btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger{
    color: #fff;
    background-color: coral;
    border: 1px solid chocolate;
  }

  .btn-danger:hover{
    color: #fff;
    background-color: bisque;
  }

  .btn:focus{
    outline: none;
  }

  .todo-container{
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
</style>