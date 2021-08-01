<template>
  <div>
    <h2>School name: {{ name }}</h2>
    <h2>School age: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "dao",
      age: 18
    }
  },
};
</script>
