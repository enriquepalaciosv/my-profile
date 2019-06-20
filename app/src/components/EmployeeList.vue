<template>
  <ul>
    <li v-for="emp in employees" :key="emp.id">
      <EmployeeListCard :employee="emp"/>
    </li>
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
      employees: [
        { id: 1, name: "Enrique Palacios", role: "Jr. Frontend Developer" },
        { id: 2, name: "Noel Flores", role: "Sr. Frontend Developer" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
li {
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    background-color: #00968751;
  }
}
</style>
