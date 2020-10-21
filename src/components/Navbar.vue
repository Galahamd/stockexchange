<template>
  <nav class="nav-extended">
    <div class="nav-wrapper red accent-4">
      <a href="/" class="left">
        <img src="@/assets/logo_loyola_u.png" alt="" />
      </a>
      <!-- Verificacion de Login -->
      <ul class="side-nav right">
        <li v-if="!isLoggedIn">
          <router-link to="/login">Iniciar Sesion</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/register">Registrase</router-link>
        </li>
        <li v-if="isLoggedIn" v-on:click="logout">
          <button class="btn amber accent-4">
            Cerrar Sesion
          </button>
        </li>
      </ul>
      <!-- ------------------------------------------------------------------------ -->
    </div>
    <div v-if="isLoggedIn" class="nav-content red darken-4">
      <ul class="tabs tabs-transparent">
        <li><router-link to="/">Noticias</router-link></li>
        <li>
          <router-link to="/broker">Broker</router-link>
        </li>
        <li>
          <router-link to="/stockexchange">Stock Exchange</router-link>
        </li>

        <li>
          <router-link to="/profile">Perfil</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Firebase from "@/firebaseConfig";
require("firebase/auth");
export default {
  name: "Navbar",
  data: function() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (Firebase.auth().currentUser) {
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
      this.currentUser = Firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      Firebase.auth().signOut();
      this.$router.go({ path: this.$router.path });
      console.log("OUT");
    },
    login: function() {
      if (Firebase.auth().currentUser) {
        this.isLoggedIn = true;
        this.currentUser = Firebase.auth().currentUser.email;
      }
    }
  }
};
</script>

<style scoped></style>
