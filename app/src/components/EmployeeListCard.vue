<template>
  <div class="card" @click="goToDetail(employee['_id'])">
    <img :src="employee.profilePicture" alt="Avatar" />
    <div class="container">
      <h4>
        <b>{{fullName}}</b>
      </h4>
      <p>{{employee.profession}}</p>
      <div class="short-bio">
        <p>{{employee.shortBio}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeListCard",
  computed: {
    fullName() {
      const { firstName, lastName } = this.employee;
      return `${firstName} ${lastName} `;
    }
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: "profile", params: { profileId: id } });
    }
  },
  props: {
    employee: Object
  }
};
</script>

<style scoped lang="scss">
h4 {
  margin-bottom: 0;
}

.card {
  margin: 16px;
  max-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}

.container {
  padding: 2px 8px;
}

img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
}

p {
  margin: 2px 0 4px 0;
}

.short-bio {
  color: gray;
  text-align: justify;
  max-height: 200px;
  overflow: auto;
  font-size: 0.8em;
}
</style>

