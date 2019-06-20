<template>
  <div class="employee-card">
    <p>{{employee.name}}</p>
    <small>
      <b>{{employee.role}}</b>
    </small>
  </div>
</template>

<script>
export default {
  name: "EmployeeListCard",
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

