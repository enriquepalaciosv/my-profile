<template>
  <div>
    <p>{{title}}</p>
    <div class="w3-light-grey w3-round-xlarge" :class="{'w3-small': isDetailed}">
      <div
        class="w3-container w3-center w3-round-xlarge w3-teal"
        :style="`width:${progress}%`"
        :class="{'empty': !isDetailed}"
      >
        <span v-if="isDetailed">{{`${progress}%`}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDetailSkillGroupItem",
  computed: {
    isDetailed() {
      return this.detailed;
    },
    progress() {
      return this.value;
    },
    title() {
      return this.text;
    }
  },
  props: {
    detailed: Boolean,
    text: String,
    value: Number
  }
};
</script>

<style scoped>
.empty {
  height: 24px;
}
</style>
