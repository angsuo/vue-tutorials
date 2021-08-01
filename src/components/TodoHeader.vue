<template>
  <div class="todo-header">
    <input type="text" v-model="todoTitle" placeholder="Add todo" @keydown.enter="newTodo" ref="toFocus"/>
  </div>
</template>

<script>
import {nanoid} from "nanoid";
export default {
  name: "TodoHeader",
  props: ["addTodo"],
  data() {
    return {
      todoTitle:""
    }
  },
  methods: {
    newTodo(){
      if(!this.todoTitle.trim()) return alert("Please add a title to your todo")
      this.addTodo({id: nanoid(), title: this.todoTitle, done: false})
      this.todoTitle = ""
    }
  },
  mounted(){
    this.$refs.toFocus.focus()
  }
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
