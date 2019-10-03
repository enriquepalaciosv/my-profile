import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "@/App.vue";
import storeObject from "@/store";
import { routes } from "@/router";
import axios from "axios";
import * as filters from "@/utils/filters";

Vue.config.devtools = true;
Vue.config.productionTip = true;

Vue.filter("date", filters.date);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({ routes, mode: "history" });
const store = new Vuex.Store(storeObject);

new Vue({
  router,
  store,
  beforeCreate() {
    axios.defaults.baseURL = process.env.VUE_APP_PROFILES_API_BASE_URL || "http://localhost:3000/api/";
  },
  render: h => h(App)
}).$mount("#app");
