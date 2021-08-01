<template>
  <div>
    <h2>Student name: {{ name }}</h2>
    <h2>Student age: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "jj",
      age: 30,
    };
  },
};
</script>

<style></style>
