import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "@/App.vue";
import storeObject from "@/store";
import { routes } from "@/router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({ routes, mode: "history" });
const store = new Vuex.Store(storeObject);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
