<template>
  <div>
      <h1>List of attendees</h1>
      <p>Sum: <span style="color: gold">{{bigSum}}</span></p>
      <input 
        type="text" 
        placeholder="Add a person"
        ref="inputName"
        @keydown.enter="addPersonToList($event.target.value)"
    >
      <ul>
          <li v-for="p in personsList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from "vuex"
export default {
    name: "Persons",
    computed:{
        ...mapState("persons", ["personsList"]),
        ...mapGetters("addition", ["bigSum"])
    },
    methods: {
        ...mapActions("persons", ["addPersonToList"])
    },
    mounted() {
        this.$refs.inputName.focus()
    },
}
</script>

<style>

</style>