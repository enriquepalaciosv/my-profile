<template>
    <div>This is the detail page for profile: {{profileId}}</div>
</template>

<script>
export default {
    name:'ProfileDetail',
    computed:{
        profileId(){
            return this.$route.params.profileId
        }
    }
}
</script>

<style>

</style>
