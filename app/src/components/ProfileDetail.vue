<template>
    <div class="w3-content w3-margin-top w3-margin-bottom main-container">

        <div class="w3-row-padding w3-margin-bottom" v-if="employee && editMode">
            <div class="w3-col">
                <div class="w3-white w3-text-grey w3-card-4 w3-padding action-menu">
                    <button class="w3-button w3-red" @click="deactivateEditMode">Cancel</button>
                    <button class="w3-button w3-teal" @click="updateProfile">Save</button>
                </div>
            </div>
        </div>

        <div class="w3-row-padding" v-if="employee">
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
            </div>
            <div class="w3-twothird">
                <ProfileDetailExperience
                        icon="fa-suitcase"
                        headline="Work Experience"
                        :experience-set="employee.workExperience"
                        :edit-mode="editMode"
                />
                <ProfileDetailExperience
                        icon="fa-certificate"
                        headline="Education"
                        :experience-set="employee.education"
                        :edit-mode="editMode"
                />
            </div>
        </div>
        <div class="no-results" v-else>
            <h2>No results 😬</h2>
        </div>
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
            employee() {
                return this.$store.getters.findEmployeeById(this.profileId);
            },
            editMode() {
                return this.$store.getters.editMode;
            }
        },
        methods: {
            deactivateEditMode() {
                this.$store.dispatch("deactivateEditMode");
            },
            updateProfile() {
                const {_id} = this.employee;
                this.$store.dispatch("updateEmployee", {id: _id, profile: this.employee});
            }
        },
        props: ["profileId"]
    };
</script>
<style scoped lang="scss">
    .main-container {
        max-width: 1400px;
    }

    .action-menu {
        display: flex;
        justify-content: flex-end;

        button {
            margin-left: 8px;
        }
    }

    .no-results {
        position: absolute;
        top: calc(50% - 25px);
        left: 0;
        right: 0;
        background-color: $primary-color;
        text-align: center;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
</style>
