<template>
  <div>
    <p class="w3-large">
      <b>
        <i :class="`fa ${theIcon} fa-fw w3-margin-right w3-text-teal`"></i>
        {{theHeadline}}
      </b>
    </p>
    <ProfileDetailSkillGroupItem
      v-for="s in skills"
      :detailed="detailed"
      :key="s.name"
      :text="s.name"
      :value="s.value"
    />
    <br>
  </div>
</template>

<script>
import ProfileDetailSkillGroupItem from "./ProfileDetailSkillGroupItem";

export default {
  name: "ProfileDetailSkillGroup",
  components: {
    ProfileDetailSkillGroupItem
  },
  computed: {
    detailed() {
      return this.showDetail;
    },
    theHeadline() {
      return this.headline;
    },
    theIcon() {
      return this.icon;
    }
  },
  data() {
    return {
      skills: this.skillSet
    };
  },
  props: {
    headline: String,
    showDetail: Boolean,
    icon: String,
    skillSet: Array
  }
};
</script>

<style>
</style>
