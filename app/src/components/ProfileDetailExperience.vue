<template>
  <div class="w3-container w3-card w3-white w3-margin-bottom">
    <h2 class="w3-text-grey w3-padding-16">
      <i :class="`fa ${theIcon} fa-fw w3-margin-right w3-xxlarge w3-text-teal`"></i>
      {{theHeadline}}
    </h2>
    <div class="w3-container" v-for="exp in experiences" :key="exp.title">
      <h5 class="w3-opacity">
        <b>{{exp.title}}</b>
      </h5>
      <h6 class="w3-text-teal">
        <i class="fa fa-calendar fa-fw w3-margin-right"></i>
        {{exp.dateRange}}
      </h6>
      <p>{{exp.description}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDetailExperience",
  computed: {
    experiences() {
      return this.experienceSet;
    }
  },
  data() {
    return {
      theHeadline: this.headline,
      theIcon: this.icon
    };
  },
  props: {
    headline: String,
    icon: String,
    experienceSet: Array
  }
};
</script>

<style>
</style>
