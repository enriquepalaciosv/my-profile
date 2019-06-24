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
html,
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto", sans-serif;
}
</style>
