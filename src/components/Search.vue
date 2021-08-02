<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        ref="searchInput"
        v-model="searchText"
        @keydown.enter="goSearch"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    goSearch() {
      // emit loading event
      this.$bus.$emit("githubLoading");

      axios
        .get(`https://api.github.com/search/users?q=${this.searchText}`)
        .then(
          ({ data }) => {
            this.$bus.$emit("githubResults", data.items);
          },
          (error) => {
            this.$bus.$emit("githubError", error.toString());
          }
        );
    },
  },
  // Get focus when component mounted
  mounted() {
    this.$refs.searchInput.focus();
  },
};
</script>
