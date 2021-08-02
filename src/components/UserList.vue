<template>
  <div class="row">
      <!-- result users list -->
      <div
        class="card"
        v-for="user in users"
        :key="user.login"
        v-show="users.length"
        >
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>

      <!-- Welcome message -->
      <div v-show="welcomeMsg">
          <h1>{{welcomeMsg}}</h1>
          <p>Please type some keywords, then press [Enter]</p>
      </div>

      <!-- Loading message -->
      <h1 v-show="isLoading">Loading...</h1>

      <!-- Search error message -->
      <h1 v-show="errorMsg">{{errorMsg}}</h1>
    </div>
</template>

<script>
export default {
    name: "UserList",
  data() {
    return {
        welcomeMsg:"Welcome to GitHub users search",
        isLoading:false,
        errorMsg:"",
      users: []
    }
  },
    mounted() {
        // Search result event listener
        this.$bus.$on("githubResults", (userArray) => {
            // Set loading to false
            this.isLoading = false
            // Set welcome message to ""
            if(this.welcomeMsg) {
                this.welcomeMsg = ""
            }
            if(this.errorMsg){
                this.errorMsg = ""
            }
            // Set users
            this.users = userArray
        })

        // Search error event listener
        this.$bus.$on("githubError", (errorMsg) => {
            // Set loading to false
            this.isLoading = false
            // Set welcome message to ""
            if(this.welcomeMsg) {
                this.welcomeMsg = ""
            }
            // Remove previous search results
            if(this.users.length){
                this.users = []
            }
            // Set error message
            this.errorMsg = errorMsg
        })

        // Search loading event listener
        this.$bus.$on("githubLoading", () => {
            // Set loading to true
            this.isLoading = true
            // Set welcome message to ""
            if(this.welcomeMsg) {
                this.welcomeMsg = ""
            }
            // Remove previous search results
            if(this.users.length){
                this.users = []
            }
            // Remove error message
            if(this.errorMsg){
                this.errorMsg = ""
            }
        })
    },
    beforeDestroy() {
        this.$bus.$off(["githubResults", "githubError", "githubLoading"])
    },
}
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>