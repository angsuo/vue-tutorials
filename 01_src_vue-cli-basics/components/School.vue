<template>
  <div>
    <h2>School name: {{ name }}</h2>
    <h2>School address: {{ address }}</h2>
    <button @click="showName">Show name</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "Dao",
      address: "Lyon",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style></style>
