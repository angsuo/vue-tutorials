<template>
  <div>
    <Addition/>
    <hr>
    <Persons/>
  </div>
</template>

<script>
import Addition from "./components/Addition.vue"
import Persons from "./components/Persons.vue"

export default {
  name: "App",
  components: {  Addition, Persons }
};
</script>

<style></style>
