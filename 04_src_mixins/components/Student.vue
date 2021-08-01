<template>
  <div>
    <h2>Name: {{ name }}</h2>
    <h2>Age: {{ age }}</h2>
    <button @click="showName">Add one year</button>
  </div>
</template>

<script>
    import {localMix} from "../customMixins"
export default {
  name: "Student",
  mixins: [localMix]
};
</script>
