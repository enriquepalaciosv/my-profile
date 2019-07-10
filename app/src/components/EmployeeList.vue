<template>
  <div class="grid">
    <EmployeeListCard :employee="emp" v-for="emp in employees" :key="emp.id" />
  </div>
</template>

<script>
import EmployeeListCard from "./EmployeeListCard";

export default {
  name: "EmployeeList",
  components: {
    EmployeeListCard
  },
  computed: {
    employees() {
      return this.$store.state.employees;
    }
  }
};
</script>

<style scoped lang="scss">
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    justify-content: start;
  }
}
</style>
