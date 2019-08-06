import axios from "axios";

export default {
    state: {
        employees: [],
        editMode: false
    },
    getters: {
        findEmployeeById: state => id => {
            return state.employees.find(emp => emp["_id"] === id);
        },
        editMode: state => state.editMode
    },
    actions: {
        fetchEmployees: ({commit}) => {
            axios
                .get("/profiles")
                .then(response => commit("setEmployees", response.data));
        },
        activateEditMode: ({commit}) => {
            commit("setEditMode", true);
        },
        deactivateEditMode: ({commit}) => {
            commit("setEditMode", false);
        },
        updateEmployee: ({commit}, {id, profile}) => {
            axios
                .put(`/profiles/${id}`, profile)
                .then(response => {
                    alert("Registro actualizado");
                    commit("setEditMode", false);
                    commit("updateEmployee", response.data);
                });

        }
    },
    mutations: {
        setEmployees: (state, employees) => {
            state.employees = employees;
        },
        setEditMode: (state, mode) => {
            state.editMode = mode;
        },
        updateEmployee: (state, updated) => {
            state.employees = state.employees.map(emp => emp["_id"] === updated["_id"] ? updated : emp);
        }
    }
};
