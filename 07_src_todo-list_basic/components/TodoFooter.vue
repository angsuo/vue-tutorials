<template>
  <div class="todo-footer" v-show="todos.length">
          <label>
            <input type="checkbox" :checked="allChecked" @click="activateCheckAll"/>
          </label>
          <span> <span>done: [{{doneTodosCount}}]</span> / total: [{{totalTodosCount}}] </span>
          <button class="btn btn-danger" @click="activateDoneTodosDeletion">清除已完成任务</button>
        </div>
</template>

<script>
export default {
    name:"TodoFooter",
    props: ["todos", "deleteDoneTodos", "checkAll"],
    computed:{
      totalTodosCount(){
        return this.todos.length
      },
      doneTodosCount(){
        return this.todos.reduce((prev, todo) => prev + (todo.done ? 1 : 0),0)
      },
      allChecked(){
        return this.doneTodosCount === this.totalTodosCount
      }
    },
    methods:{
      activateDoneTodosDeletion(){
        this.deleteDoneTodos()
      },
      activateCheckAll(){
        this.checkAll(!this.allChecked)
      }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
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

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>