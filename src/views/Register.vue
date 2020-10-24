<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel grey lighten-3 black-text center">
          <h3>RESGISTRO NUEVO INVERSIONISTA</h3>
          <form v-on:submit.prevent="onSubmit">
            <div class="input-field ">
              <i class="material-icons prefix">email</i>
              <input
                type="text"
                id="email"
                placeholder="e-mail"
                v-model="email"
              />
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input
                type="password"
                id="contraseña"
                placeholder="Contraseña"
                v-model="password"
              />
            </div>
            <div class="input-field ">
              <i class="material-icons prefix">account_circle</i>
              <input
                type="text"
                id="userId"
                placeholder="Nombre de Usuario"
                v-model="userName"
              />
            </div>
            <div class="input-field ">
              <i class="material-icons prefix">person</i>
              <input
                type="text"
                id="name"
                placeholder="Nombre"
                v-model="name"
              />
            </div>
            <div class="input-field ">
              <i class="material-icons prefix">person_outline</i>
              <input
                type="text"
                id="lastname"
                placeholder="Apellido"
                v-model="lastName"
              />
            </div>
            <i class="material-icons prefix left">supervisor_account</i>
            <div class="input-field">
              <select class="browser-default" v-model="broker">
                <option value="" disabled selected>Elija un broker</option>
                <option value="Mauricio">Mau</option>
                <option value="Jocelyne">Jocelyne</option>
                <option value="Patrick">Patrick</option>
                <option value="Mariana">Mariana</option>
                <option value="Frankie">Frankie</option>
              </select>
            </div>
            <p v-if="errorMessage" class="red-text">*{{ errorMessage }}</p>
            <button class="btn  grey darken-1" v-on:click="register">
              Registrarse
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
require("firebase/firestore");
const db = Firebase.firestore();
export default {
  name: "Register",
  data: function() {
    return {
      broker: "",
      email: "",
      password: "",
      userName: "",
      name: "",
      lastName: "",
      errorMessage: null
    };
  },
  methods: {
    register: function(e) {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            let currentUser = Firebase.auth().currentUser;
            alert(
              "Registro exitoso con el correo electronico",
              currentUser.email
            );
            console.log(user);
            currentUser
              .updateProfile({
                displayName: this.userName
              })
              .then(
                function() {
                  // Profile updated successfully!
                  console.log(currentUser.displayName);
                },
                function(error) {
                  // An error happened.
                  this.errorMessage = error;
                }
              );
            this.$router.go({ path: this.$router.path });
          },
          err => {
            this.errorMessage = err.message;
          }
        );
      // Add a new document in collection "Investors"
      db.collection("Investors")
        .doc(this.email)
        .set({
          broker: this.broker,
          cash: 1000,
          email: this.email,
          lastName: this.lastName,
          name: this.name,
          netWorth: 1000,
          userName: this.userName,
          sofiaStocks: 0,
          cbnStocks: 0,
          embolStocks: 0,
          farmacorpStocks: 0,
          pilStocks: 0,
          finoStocks: 0,
          soboceStocks: 0,
          monterreyStocks: 0,
          imcruzStocks: 0,
          polloscopacabanaStocks: 0
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      e.preventDefault();
    }
  }
};
</script>

<style scoped></style>
