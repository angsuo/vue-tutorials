<template>
  <ul class="todo-main">
          <!-- 3) Use imported components -->
          <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
        </ul>
</template>

<script>
// 1) Import components
import TodoItem from "./TodoItem.vue"
export default {
    name:"TodoList",
    // 2) Register imported components
    components:{TodoItem},
    props: ["todos"],
}
</script>

<style scoped>
    /*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>