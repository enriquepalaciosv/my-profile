<template>
    <div>
        <div class="w3-display-container avatar-container">
            <img class="photo" :src="emp.profilePicture" alt="Avatar"/>
            <div class="name w3-display-bottomleft w3-container w3-text-white">
                <h2>{{`${emp.firstName} ${emp.lastName}`}}</h2>
            </div>
        </div>

        <div class="w3-container">
            <p>
                <i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <span v-if="!editMode">{{emp.profession}}</span>
                <input type="text" class="w3-border w3-round-large" v-model="emp.profession" v-if="editMode">
            </p>
            <p>
                <i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <span v-if="!editMode">{{emp.address}}</span>
                <input type="text" class="w3-border w3-round-large" v-model="emp.address" v-if="editMode">
            </p>
            <p>
                <i class="fa fa-birthday-cake fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <span v-if="!editMode">{{emp.birthday | date}}</span>
                <input type="text" class="w3-border w3-round-large" v-model="emp.birthday" v-if="editMode">
            </p>
            <p>
                <i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <span v-if="!editMode">{{emp.email}}</span>
                <input type="text" class="w3-border w3-round-large" v-model="emp.email" v-if="editMode">
            </p>
            <p>
                <i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <span v-if="!editMode">{{emp.phoneNumber}}</span>
                <input type="text" class="w3-border w3-round-large" v-model="emp.phoneNumber" v-if="editMode">
            </p>

            <p v-if="emp.twitter">
                <i class="fa fa-twitter fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <span v-if="!editMode">{{emp.twitter}}</span>
                <input type="text" class="w3-border w3-round-large" v-model="emp.twitter" v-if="editMode">
            </p>

            <p v-if="emp.linkedIn">
                <i class="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <span v-if="!editMode">{{emp.linkedIn}}</span>
                <input type="text" class="w3-border w3-round-large" v-model="emp.linkedIn" v-if="editMode">
            </p>

            <hr/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileDetailMainInfo",
        data() {
            return {
                emp: {...this.employee}
            };
        },
        props: {
            employee: Object,
            editMode: Boolean
        },
        watch: {
            emp: {
                handler(value) {
                    this.$emit('change', value);
                },
                deep: true
            }
        }
    };
</script>

<style scoped lang="scss">
    .photo {
        width: 100%;
    }

    .name {
        z-index: 2;
    }

    .avatar-container {
        position: relative;

        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 60px;
            display: inline-block;
            background: linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0),
                            rgba(0, 0, 0, 0.6)
            );
        }
    }

    input {
        width: 80%
    }

</style>


