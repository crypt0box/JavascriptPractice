import Vue from 'vue';
import App from './App.vue';
import axios from "axios";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/http-vuejs-f7659/databases/(default)/documents";

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
