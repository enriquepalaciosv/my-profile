<template>
  <!-- Container -->
  <div class="w3-content w3-margin-top w3-margin-bottom" style="max-width:1400px;">
    <!-- The Grid -->
    <div class="w3-row-padding">
      <!-- Left Column -->
      <div class="w3-third">
        <div class="w3-white w3-text-grey w3-card-4">
          <ProfileDetailMainInfo :employee="employee"/>
          <div class="w3-container">
            <ProfileDetailSkillGroup
              :skill-set="employee.skills"
              icon="fa-asterisk"
              :headline="'Skills'"
              :show-detail="true"
            />
            <ProfileDetailSkillGroup
              :skill-set="employee.languages"
              icon="fa-globe"
              :headline="'Languages'"
            />
          </div>
        </div>
        <br>
        <!-- End Left Column -->
      </div>
      <!-- Right Column -->
      <div class="w3-twothird">
        <ProfileDetailExperience
          icon="fa-suitcase"
          headline="Work Experience"
          :experience-set="employee.workExperience"
        />
        <ProfileDetailExperience
          icon="fa-certificate"
          headline="Education"
          :experience-set="employee.education"
        />
        <!-- End Right Column -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Container -->
  </div>
</template>

<script>
import ProfileDetailMainInfo from "./ProfileDetailMainInfo";
import ProfileDetailSkillGroup from "./ProfileDetailSkillGroup";
import ProfileDetailExperience from "./ProfileDetailExperience";

export default {
  name: "ProfileDetail",
  components: {
    ProfileDetailMainInfo,
    ProfileDetailSkillGroup,
    ProfileDetailExperience
  },
  data() {
    const profileId = this.$route.params.profileId;
    return {
      employee: this.$store.state.employees.find(e => e["_id"] == profileId)
    };
  }
};
</script>

<style>
</style>
