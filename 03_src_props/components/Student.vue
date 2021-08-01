<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Name: {{ name }}</h2>
    <h2>Age: {{ thisAge }}</h2>
    <button @click="addYear">Add one year</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "道可道，非常道。",
      // need to store prop in a new variable if need to be changed (via button click)
      thisAge: this.age,
    };
  },
  methods: {
    addYear() {
      this.thisAge++
    },
  },
  /* First way to declare properties */
  // props:["name", "age"]

  // Declare properties with Types
  // props: {
  //    name: String,
  //    age: Number
  //}

  // Declare properties with most controls
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99,
    },
  },
};
</script>
