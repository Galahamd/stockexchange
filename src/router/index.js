import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Noticias from "@/views/Noticias.vue";
import Profile from "@/views/Profile.vue";
import Stockexchange from "@/views/Stockexchange.vue";
import Broker from "@/views/Broker.vue";

Vue.use(VueRouter);
import Firebase from "@/firebaseConfig";
require("firebase/auth");
const routes = [
  {
    path: "/",
    name: "Noticias",
    component: Noticias,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/stockexchange",
    name: "Stockexchange",
    component: Stockexchange,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/broker",
    name: "Broker",
    component: Broker,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresGuest: true
    }
  }
];

let router = new VueRouter({
  routes
});
//Nav Guards
router.beforeEach((to, from, next) => {
//Check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //Checks if NOT logged in
    if (!Firebase.auth().currentUser) {
      //Go to login
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      //Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    //Checks if logged in
    if (Firebase.auth().currentUser) {
      //Go to login
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      //Proceed to route
      next();
    }
  }
});
export default router;
