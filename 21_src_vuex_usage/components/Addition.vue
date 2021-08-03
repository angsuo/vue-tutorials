<template>
  <div>
    <h1>Current sum: {{sum}}</h1>
    <h3>Big sum (*10): {{bigSum}}</h3>
    <p>Newest attendee: {{name}}</p>
    <!-- <p>My name is "{{fName}}" and my last name is "{{lName}}"</p> -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="inc(n)">Increment</button>
    <button @click="dec(n)">Decrement</button>
    <button @click="incOdd(n)">Inc. if Odd</button>
    <button @click="incWait(n)">Wait before Inc.</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from "vuex"
export default {
  name: "Addition",
  data() {
    return {
      n: 1,
    };
  },
  computed:{
    ...mapState("addition", ["sum"]),
    ...mapGetters("addition", ["bigSum"]),
    name(){
      const theList = this.$store.state.persons.personsList
      return theList[theList.length-1].name
    }
  },
  methods: {
    ...mapActions("addition", ["incOdd", "incWait"]),
    ...mapMutations("addition", {inc: "INC", dec: "DEC"})
  }
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
