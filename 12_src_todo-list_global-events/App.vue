<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo"/>
      <TodoList
        :todos="todos"
      />
      <TodoFooter
        :todos="todos"
        @deleteDoneTodos="deleteDoneTodos"
        @checkAll="checkAll"
      />
    </div>
  </div>
</template>

<script>
// 1) Import components
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  // 2) Register imported components
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id != id);
    },
    deleteDoneTodos() {
      this.todos = this.todos.filter((t) => !t.done);
    },
    checkTodo(changedTodo) {
      // get the todo to check
      const toCheck = this.todos.find((t) => t.id === changedTodo.id);
      // find index
      const toCheckIndex = this.todos.indexOf(toCheck);

      this.todos.splice(toCheckIndex, 1, changedTodo);
    },
    checkAll(all) {
      all
        ? (this.todos = this.todos.reduce(
            (prev, todo) =>
              prev.concat(todo.done ? { ...todo } : { ...todo, done: true }),
            []
          ))
        : (this.todos = this.todos.reduce(
            (prev, todo) =>
              prev.concat(!todo.done ? { ...todo } : { ...todo, done: false }),
            []
          ));
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(newTodos) {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      },
    },
  },
  mounted() {
    // add listener for global "deleteTodo" event
    this.$bus.$on("deleteTodo", this.deleteTodo)

    // add listener for global "checkTodo" event
    this.$bus.$on("checkTodo", this.checkTodo)
  },
  beforeDestroy() {
    this.$bus.$off(["deleteTodo", "checkTodo"])
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
