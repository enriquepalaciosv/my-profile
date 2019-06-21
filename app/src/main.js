import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App.vue";
import EmployeeList from "./components/EmployeeList";
import ProfileDetail from "./components/ProfileDetail";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    { path: "/", component: EmployeeList },
    { path: "/profile/:profileId", component: ProfileDetail }
];
const router = new VueRouter({ routes, mode: "history" });

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");