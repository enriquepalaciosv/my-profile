<template>
  <ul>
    <router-link tag="li" :to="`/profile/${emp['_id']}`" v-for="emp in employees" :key="emp.id">
      <EmployeeListCard :employee="emp"/>
    </router-link>
  </ul>
</template>

<script>
import EmployeeListCard from "./EmployeeListCard";

export default {
  name: "EmployeeList",
  components: {
    EmployeeListCard
  },
  data() {
    return {
      employees: this.$store.state.employees
    };
  }
};
</script>

<style scoped lang="scss">
li {
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    background-color: $primary-color;
  }
}
</style>
