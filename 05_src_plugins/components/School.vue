<template>
  <div>
    <h2>School name: {{ name | mySlice }}</h2>
    <h2>School full name: "{{name}}"</h2>
    <h2>School age: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Jack A really long name",
      age: 18
    }
  },
};
</script>
