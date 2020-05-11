import axios from "axios";
import data from './data';

export default {
    state: {
        employees: [],
        editMode: false
    },
    getters: {
        findEmployeeById: state => id => {
            return data;
        },
        editMode: state => state.editMode
    },
    actions: {
        fetchEmployees: ({commit}) => {    
            commit("setEmployees", [data]);            
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
