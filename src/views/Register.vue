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
                v-model="lastname"
              />
            </div>
            <div class="input-field">
              <i class="material-icons prefix">supervisor_account</i>
              <label for="cars">Choose a car:</label>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <option value="Mauricio">Mau</option>
              <option value="Jocelyne">Jocelyne</option>
              <option value="Patrick">Patrick</option>
              <option value="Mariana">Mariana</option>
              <option value="Frankie">Frankie</option>
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
      lastname: "",
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
            db.collection("Investor")
              .doc(this.userName)
              .set({
                broker: this.broker,
                cash: 1000,
                email: this.email,
                lastname: this.lastname,
                name: this.name,
                netWorth: 0,
                userName: this.userName
              })
              .then(function() {
                console.log("Document successfully written!");
              })
              .catch(function(error) {
                console.error("Error writing document: ", error);
              });
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

<style scoped></style>
