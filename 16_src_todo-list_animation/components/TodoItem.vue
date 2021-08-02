<template>
  <li @click.self="activateCheckTodo">
            <label>
              <input type="checkbox" :checked="todo.done"/>
              <span v-show="!editing">{{todo.title}}</span>
              <input 
                type="text" 
                :value="todo.title" 
                v-show="editing" 
                @keydown.enter="editTodo"
                @keydown.esc="cancelEditing"
                @blur="cancelEditing"
                ref="todoInput">
            </label>
            <button class="btn btn-danger" @click.stop="activateDeletion">Delete</button>
            <button class="btn btn-info" v-show="!editing" @click.stop="activateEditing">Edit</button>
  </li>
</template>

<script>
export default {
    name:"TodoItem",
    props: ["todo"],
    data() {
      return {
        editing: false
      }
    },
    methods: {
      activateDeletion(){
        this.$bus.$emit("deleteTodo",this.todo.id);
      },
      activateEditing(){
        this.editing = !this.editing
        if(this.editing){
          // when DOM finished updating (the input need to exist to be focused)
          this.$nextTick(function(){
            this.$refs.todoInput.focus()
          })
        }
      },
      activateCheckTodo(){
        this.$bus.$emit("checkTodo",{...this.todo, done: !this.todo.done})
      },
      editTodo(e){
        // if empty after editing: delete todo item
        if(!e.target.value.trim()) return this.activateDeletion();

        // change todo title
        this.todo.title = e.target.value.trim();
        // stop editing
        this.editing = false
      },
      cancelEditing(){
        this.editing = false
      }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
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
  border-bottom: none;
}

li:hover{
    background-color: #ddd;
    cursor: pointer;
}

li:hover button {
    display: block;
}
</style>