<template>
  <div>
    <div class="w3-display-container avatar-container">
      <img :src="emp.profilePicture" style="width: 100%;" alt="Avatar">
      <div class="w3-display-bottomleft w3-container w3-text-white">
        <h2>{{`${emp.firstName} ${emp.lastName}`}}</h2>
      </div>
    </div>

    <div class="w3-container">
      <p>
        <i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
        {{emp.profession}}
      </p>
      <p>
        <i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
        {{emp.address}}
      </p>
      <p>
        <i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
        {{emp.email}}
      </p>
      <p>
        <i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
        {{emp.phoneNumber}}
      </p>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDetailMainInfo",
  data() {
    return {
      emp: this.employee
    };
  },
  props: {
    employee: Object
  }
};
</script>

<style>
</style>


