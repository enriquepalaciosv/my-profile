<template>
    <div>
        <p class="w3-large">
            <b>
                <i :class="`fa ${theIcon} fa-fw w3-margin-right w3-text-teal`"></i>
                {{theHeadline}}
            </b>
        </p>
        <ProfileDetailSkillGroupItem
                v-for="(s,index) in skills"
                :detailed="detailed"
                :edit-mode="editMode"
                :key="index"
                :item="{index,...s}"
                :change-handler="changeHandler"
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
            editMode: Boolean,
            headline: String,
            showDetail: Boolean,
            icon: String,
            skillSet: Array,
            changeHandler: Function
        }
    };
</script>

<style>
</style>
