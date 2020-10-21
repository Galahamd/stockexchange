<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="card-panel  black-text center">
          <h4>INVERSIONISTA</h4>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">person</i>
              Nombre: {{ name }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">person_outline</i>
              Apellido: {{ lastName }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">email</i>
              Correo electronico: {{ email }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">account_circle</i>
              Nombre de Usuario: {{ userName }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">supervisor_account</i>
              broker: {{ broker }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">monetization_on</i>
              Efectivo : {{ cash }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">attach_money</i>
              Valor Neto : {{ netWorth }}
            </p>
          </div>
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
  name: "Precios",
  data: function() {
    return {
      name: "Test",
      lastName: "",
      userName: "",
      email: "",
      broker: "",
      cash: 0,
      netWorth: 0,
      investor: {}
    };
  },
  created() {
    var docRef = db.collection("Investor").doc("Joce");
    let investor;
    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data(), doc.data().name, this.name);
          investor = doc.data();
          console.log("Inversionista", investor);
          
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    /*this.name = investor.name;
    this.lastName = investor.lastName;
    this.userName = investor.userName;
    this.email = investor.email;
    this.broker = investor.broker;
    this.cash = investor.cash;
    this.netWorth = investor.netWorth;*/
  }
};
</script>

<style lang="scss" scoped></style>
