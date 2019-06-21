<template>
  <div class="employee-card">
    <p>{{fullName}}</p>
    <small>
      <b>{{employee.profession}}</b>
    </small>
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
  props: {
    employee: Object
  }
};
</script>

<style scoped>
.employee-card,
p {
  text-align: left;
  margin: 2px 0 2px 0;
}
</style>

