<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel grey darken-4 white-text center">
          <form v-on:submit.prevent="onSubmit">
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input
                type="text"
                id="email"
                placeholder="e-mail"
                v-model="email"
                class="white-text"
              />
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input
                type="password"
                id="contraseña"
                placeholder="Contraseña"
                v-model="password"
                class="white-text"
              />
            </div>
            <p v-if="errorMessage" class="red-text">*{{ errorMessage }}</p>
            <button class="btn  blue-grey darken-2" v-on:click="login">
              Iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from "@/firebaseConfig";
require("firebase/auth");
export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: "",
      errorMessage: null
    };
  },
  methods: {
    login: function(e) {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Log as ${user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            this.errorMessage = err.message;
          }
        );
      e.preventDefault();
    }
  }
};
</script>

<style lang="scss" scoped></style>
