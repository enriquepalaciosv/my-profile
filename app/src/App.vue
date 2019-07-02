<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
  created(){
    this.$store.dispatch('fetchEmployees');
  }
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
}
</style>
