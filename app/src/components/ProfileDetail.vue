<template>
  <!-- Container -->
  <div class="w3-content w3-margin-top w3-margin-bottom" style="max-width:1400px;">
    <!-- The Grid -->
    <div class="w3-row-padding">
      <!-- Left Column -->
      <div class="w3-third">
        <div class="w3-white w3-text-grey w3-card-4">
          <ProfileDetailMainInfo/>
          <div class="w3-container">
            <ProfileDetailSkillGroup
              :skill-set="skills"
              icon="fa-asterisk"
              :headline="'Skills'"
              :show-detail="true"
            />
            <ProfileDetailSkillGroup
              :skill-set="languages"
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
          :experience-set="workExperience"
        />
        <ProfileDetailExperience
          icon="fa-certificate"
          headline="Education"
          :experience-set="education"
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
  computed: {
    profileId() {
      return this.$route.params.profileId;
    }
  },
  data() {
    return {
      skills: [
        { name: "AngularJs", value: 90 },
        { name: "ReactJs", value: 60 },
        { name: "VueJs", value: 40 }
      ],
      languages: [
        { name: "Spanish", value: 100 },
        { name: "English", value: 75 }
      ],
      workExperience: [
        {
          title: "Frontend Developer / Struck - NicaSource",
          dateRange: "Apr 2019 - current",
          description:
            "Vue.js, Ruby On Rails 3 and AngularJS websites development."
        },
        {
          title: "Frontend, Backend and Mobile Developer / DGA",
          dateRange: "Nov 2014 - Mar 2019",
          description:
            "AngularJS and ReactJs websites development, Java REST API and Android apps"
        }
      ],
      education: [
        {
          title: "University / UNI - RUPAP",
          dateRange: "Mar 2010 - Mar 2015",
          description: "System Engineering Degree"
        },
        {
          title: "Android ATC / www.androidatc.com",
          dateRange: "August 25, 2018",
          description: "AND-801	- Android Certified Application Developer v8"
        }
      ]
    };
  }
};
</script>

<style>
</style>
