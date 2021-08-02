<template>
  <div>
    <button @click="toShow = !toShow">Animate School</button>
    <transition name="school" appear>
      <h2 v-show="toShow">School name: {{ name }}</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "dao",
      toShow: true,
    };
  },
};
</script>

<style scoped>
h2 {
  background-color: gold;
}
.school-enter-active,
.school-leave-active {
  transition: 0.3s linear;
}

.school-enter,
.school-leave-to {
  opacity:0;
  transform: translateX(-100%);
}

.school-leave,
.school-enter-to {
  opacity:1;
  transform: translateX(0px);
}
</style>
