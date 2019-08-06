<template>
    <div>
        <p v-if="!editMode">{{skill.name}}</p>
        <input type="text" min="0" max="100" v-model="skill.name" v-else/>
        <div class="w3-light-grey w3-round-xlarge" :class="{'w3-small': isDetailed}" v-if="!editMode">
            <div
                    class="w3-container w3-center w3-round-xlarge w3-teal"
                    :style="`width:${skill.value}%`"
                    :class="{'empty': !isDetailed}"
            >
                <span v-if="isDetailed">{{`${skill.value}%`}}</span>
            </div>
        </div>
        <div v-if="editMode">
            <input type="range" min="0" max="100" v-model="skill.value"/>
            <span>{{` ${skill.value}%`}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileDetailSkillGroupItem",
        computed: {
            isDetailed() {
                return this.detailed;
            }
        },
        data() {
            return {
                skill: this.item
            }
        },
        props: {
            detailed: Boolean,
            editMode: Boolean,
            item: Object,
            changeHandler: Function
        },
        watch: {
            item: {
                handler(value) {
                    this.changeHandler(value);
                },
                deep: true
            }
        }
    };
</script>

<style scoped>
    .empty {
        height: 24px;
    }

    input[type="range"] {
        width: 80%
    }
</style>
