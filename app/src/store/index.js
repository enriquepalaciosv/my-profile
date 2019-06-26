import axios from "axios";

export default {
  state: {
    employees: []
  },
  getters: {
    findEmployeeById: state => id => {
      return state.employees.find(emp => emp["_id"] == id);
    }
  },
  actions: {
    fetchEmployees: ({commit}) => {
      axios
        .get("/profiles")
        .then(response => commit("setEmployees", response.data));
    }
  },
  mutations: {
    setEmployees: (state, employees) => {
      state.employees = employees;
    }
  }
};
