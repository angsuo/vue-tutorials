<template>
  <div>
    <h1 ref="title">Hello {{ name }}</h1>
    <School ref="sch"/>
    <button @click="showRef">Click</button>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School },
  data() {
    return {
      name: "there",
    };
  },
  methods: {
      showRef(){
        //   Show all refs
          console.log(this.$refs)
        //   Show the "School" component data
        console.log(this.$refs.sch.name)
      }
  },
};
</script>

<style></style>
