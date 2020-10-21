import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { firestorePlugin } from "vuefire";
import Firebase from "@/firebaseConfig";
import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
require("firebase/auth");
Vue.use(firestorePlugin);
Vue.config.productionTip = false;
let app;
Firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    user;
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
