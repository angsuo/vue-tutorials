<template>
  <div>
    <h1>Current sum: {{sum}}</h1>
    <h3>Big sum (*10): {{bigSum}}</h3>
    <p>My name is "{{fName}}" and my last name is "{{lName}}"</p>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="inc">Increment</button>
    <button @click="dec">Decrement</button>
    <button @click="incOdd">Inc. if Odd</button>
    <button @click="incWait">Wait before Inc.</button>
  </div>
</template>

<script>
// import mapState & mapGetters from vuex
import {mapState, mapGetters} from "vuex"
export default {
  name: "Addition",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // ...mapState({fName: "fName", lName: "lName", sum: "sum"}),
    // ...mapGetters({bigSum: "bigSum"}),
    ...mapState(["fName", "lName", "sum"]),
    ...mapGetters(["bigSum"])
  },
  methods: {
    inc() {
      // simple mutation. no need to dispatch any action
      this.$store.commit("INC", this.n);
    },
    dec() {
      this.$store.commit("DEC", this.n);
    },
    incOdd() {
      // not direct mutation, dispatching an action
      this.$store.dispatch("incOdd", this.n);
    },
    incWait() {
      this.$store.dispatch("incWait", this.n);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
