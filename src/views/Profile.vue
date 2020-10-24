<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="card-panel  black-text center">
          <h4>INVERSIONISTA</h4>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">person</i>
              Nombre: {{ investor.name }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">person_outline</i>
              Apellido: {{ investor.lastName }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">email</i>
              Correo electronico: {{ investor.email }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">account_circle</i>
              Nombre de Usuario: {{ investor.userName }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">supervisor_account</i>
              broker: {{ investor.broker }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">monetization_on</i>
              Efectivo : {{ investor.cash }}
            </p>
          </div>
          <div class="left-align">
            <p>
              <i class="material-icons prefix red-text">attach_money</i>
              Valor Neto : {{ investor.netWorth }}
            </p>
          </div>
          <div class="left-align"></div>
        </div>
        <div class="card black-text">
          <h5>
            <i class="material-icons prefix red-text">work</i>Portafolio de
            Acciones
          </h5>
          <ul>
            <li v-if="!(investor.sofiaStocks === 0)">
              AVÍCOLA SOFÍA: {{ investor.sofiaStocks }}
            </li>
            <li v-if="!(investor.cbnStocks === 0)">
              CERVECERÍA BOLIVIANA NACIONAL CBN: {{ investor.cbnStocks }}
            </li>
            <li v-if="!(investor.embolStocks === 0)">
              EMBOL S.A. COCA COLA: {{ investor.embolStocks }}
            </li>
            <li v-if="!(investor.farmacorpStocks === 0)">
              FARMACORP: {{ investor.farmacorpStocks }}
            </li>
            <li v-if="!(investor.pilStocks === 0)">
              PIL ANDINA S.A.: {{ investor.pilStocks }}
            </li>
            <li v-if="!(investor.finoStocks === 0)">
              FINO INDUSTRIAS DE ACEITE S.A.: {{ investor.finoStocks }}
            </li>
            <li v-if="!(investor.soboceStocks === 0)">
              SOBOCE S.A.: {{ investor.soboceStocks }}
            </li>
            <li v-if="!(investor.monterreyStocks === 0)">
              MONTERREY SRL: {{ investor.monterreyStocks }}
            </li>
            <li v-if="!(investor.imcruzStocks === 0)">
              IMCRUZ: {{ investor.imcruzStocks }}
            </li>
            <li v-if="!(investor.polloscopacabanaStocks === 0)">
              POLLOS COPACABANA: {{ investor.polloscopacabanaStocks }}
            </li>
          </ul>
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
  name: "Profile",
  data: function() {
    return {
      email: "",
      investor: {}
    };
  },
  mounted() {
    if (Firebase.auth().currentUser) {
      this.email = Firebase.auth().currentUser.email;
    }
    var docRef = db.collection("Investors").doc(this.email);
    docRef.get().then(doc => {
      this.investor = doc.data();
    });
  }
};
</script>

<style lang="scss" scoped></style>
