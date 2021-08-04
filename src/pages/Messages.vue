<template>
  <div>
    <ul>
      <li><router-link :to="{
        name:'detailView',
        params:{
          id:1,
          msg:'msg1'
          },
          query:{
            toQuery:'test'
          }
          }">message001</router-link>&nbsp;&nbsp;</li>
      <li><router-link to="/home/messages/detail/1/msg1">message002</router-link>&nbsp;&nbsp;</li>
      <li><router-link :to="{name: 'detailView'}">message003</router-link>&nbsp;&nbsp;</li>
    </ul>
    <keep-alive name="Detail">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Messages",
};
</script>

<style></style>``