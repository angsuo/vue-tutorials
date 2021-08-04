<template>
  <div>
      <p>Message id: {{params.id}}</p>
      <p>Message: {{params.msg}}</p>
      <p>Query: {{query.toQuery}}</p>
      <router-link :to="{name:'miniDetailView'}">further</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"Detail",
    props: ["params", "query"],
    data(){
        return {
            thisQuery: null
        }
    },
    mounted() {
        this.thisQuery = this.query.toQuery
    },
}
</script>

<style>

</style>