import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAxios from "vue-axios";
import axios from "axios";
import VueNoty from "vuejs-noty";
import 'vuejs-noty/dist/vuejs-noty.css'


axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

Vue.use(VueAxios, axios);
Vue.use(VueNoty);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
