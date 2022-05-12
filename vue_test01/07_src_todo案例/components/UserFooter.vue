<template>
  <div class = "todo-footer" v-show = "totalTodo">
      <label>
          <!-- 第一种方法 -->
          <!-- <input type="checkbox" :checked = "isAll" @change = 'checkAll'> -->

          <!-- 第二种写法 -->
          <input type="checkbox" v-model = "isAll">
      </label>
      <span>
          <span>已完成{{completedStatistic}}</span> / 全部{{totalTodo}}
      </span>
      <button class = "btn btn-danger" @click = "clearAll">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name: "UserFooter",
        props: ['todoArr', 'checkAllTodo', 'clearAllTodo'],
        computed: {

            totalTodo(){
                return this.todoArr.length
            },

            // reduce专门用于条件统计
            completedStatistic(){
                // let count = 0;
                // this.todoArr.forEach(todo => {
                //     if(todo.completed){
                //         count++
                //     }
                // });
                // return count

                return this.todoArr.reduce((pre, current) => {         // pre:第二次调用的初始值是第一次调用这个箭头函数的返回值
                    // console.log(pre,current)
                    return (pre + (current.completed ? 1: 0))

                },0)        // 此处的0相当于上述的 let count = 0

                // 精简
                // return this.todoArr.reduce((pre, todo) => (pre + (current.completed ? 1: 0)), 0)
            },


            // 第一种写法
            // isAll(){
            //     return this.completedStatistic === this.totalTodo && this.totalTodo > 0
            // }

            // 第二中写法
            isAll: {
                get(){
                    return this.completedStatistic === this.totalTodo && this.totalTodo > 0
                },
                set(event){
                    // console.log(event)
                    this.checkAllTodo(event)
                }
                
            }


        },

        methods: {
            // 第二中写法
            // checkAll(event){
            //     // console.log('@@', event.target.checked)
            //     this.checkAllTodo(event.target.checked)
            // },

            clearAll(){
                this.clearAllTodo()
            }
        }

    }
</script>

<style scoped>
    .todo-footer{
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px
    }

    .todo-footer label{
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }


    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button{
        float: right;
        margin-top: 5px;
    } 



</style>