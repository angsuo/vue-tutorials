<template>
  <div>
    <Student name="JJ" :age="30"/>
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: { Student },
  data() {
    return {
      name: "there",
    };
  }
};
</script>

<style></style>
