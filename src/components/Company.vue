<template>
  <div class="card sticky-action  blue-grey lighten-4">
    <span class="card-title grey-text text-darken-4"
      >{{ company.companyName
      }}<i class="material-icons right">more_vert</i></span
    >
    <div class="row card-content ">
      <div class="col s6">
        <img v-bind:src="company.companyLogo" alt="" />
      </div>
      <div class="col s6">
        <h6>Valor Neto de la empresa: {{ company.companyNetWorth }}$</h6>
        <h6>Efectivo de la empresa: {{ company.companyCash }}$</h6>
        <h6>
          Cantidad de Acciones disponibles a la venta:
          {{ company.companyAvailableStocks }}
        </h6>
      </div>
      <h5>Valor Accion de la empresa: {{ company.companyStockValue }}$</h5>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"
        ><i class="material-icons right">close</i>Card Title</span
      >
      <p>
        Here is some more information about this product that is only revealed
        once clicked on.
      </p>
    </div>
    <div class="card-action">
      <div v-if="!exchange" class="row">
        <div class="col s6">
          <button class="btn green" @click="exchangeStateBuy()">
            Comprar Acciones
          </button>
        </div>
        <div class="col s6">
          <button class="btn red" @click="exchangeStateSell()">
            Vender Acciones
          </button>
        </div>
      </div>
      <div v-if="exchangeBuy">
        <p>Ingrese Numero de acciones a comprar</p>
        <input type="number" v-model="buyStocks" />
        <button class="btn green" @click="stockBuy()">
          Comprar Acciones
        </button>
      </div>
      <div v-if="exchangeSell">
        <p>Ingrese Numero de acciones a vender</p>
        <input type="number" v-model="sellStocks" />
        <button class="btn red" @click="stockSell()">
          Vender Acciones
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//Firebase Config
import Firebase from "@/firebaseConfig";
require("firebase/auth");
require("firebase/firestore");
const db = Firebase.firestore();
export default {
  name: "Company",
  props: [`corporation`],
  data: function() {
    return {
      company: this.corporation,
      companyAvailableStocks: null,
      companyCash: null,
      companyName: "",
      companyNetWorth: null,
      companyStockValue: null,
      buyStocks: null,
      sellStocks: null,
      exchange: false,
      exchangeBuy: false,
      exchangeSell: false,
      investor: {}
    };
  },
  created() {
    if (Firebase.auth().currentUser) {
      this.email = Firebase.auth().currentUser.email;
    }
    var docRef = db.collection("Investors").doc(this.email);
    docRef.get().then(doc => {
      this.investor = doc.data();
    });
  },
  methods: {
    //Change state so Investor can buy Stocks
    exchangeStateBuy: function() {
      this.exchangeBuy = !this.exchangeBuy;
      this.exchange = !this.exchange;
    },
    stockBuy: function() {
      this.company.companyAvailableStocks -= this.buyStocks;
      this.company.companyCash +=
        this.buyStocks * this.company.companyStockValue;
      this.company.companyNetWorth =
        this.company.companyCash +
        this.company.companyAvailableStocks * this.company.companyStockValue;
      //this.investor.this.buyStocks;
      db.collection("Companies")
        .doc(this.company.id)
        .update({
          companyAvailableStocks: this.company.companyAvailableStocks,
          companyCash: this.company.companyCash,
          companyNetWorth: this.company.companyNetWorth
        });

      if ("AVÍCOLASOFIA" === this.company.id) {
        this.investor.sofiaStocks += parseInt(this.buyStocks, 10);
        this.investor.cash -=
          parseInt(this.buyStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            sofiaStocks: this.investor.sofiaStocks
          });
      }
      if ("CBN" === this.company.id) {
        this.investor.cbnStocks += parseInt(this.buyStocks, 10);
        this.investor.cash -=
          parseInt(this.buyStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            cbnStocks: this.investor.cbnStocks
          });
      }
      if ("EMBOL" === this.company.id) {
        this.investor.embolStocks += parseInt(this.buyStocks, 10);
        this.investor.cash -=
          parseInt(this.buyStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            embolStocks: this.investor.embolStocks
          });
      }
      if ("FARMACORP" === this.company.id) {
        this.investor.farmacorpStocks += parseInt(this.buyStocks, 10);
        this.investor.cash -=
          parseInt(this.buyStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            farmacorpStocks: this.investor.farmacorpStocks
          });
      }
      if ("FINO" === this.company.id) {
        this.investor.finoStocks += parseInt(this.buyStocks, 10);
        this.investor.cash -=
          parseInt(this.buyStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            finoStocks: this.investor.finoStocks
          });
      }
      if ("IMCRUZ" === this.company.id) {
        this.investor.imcruzStocks += parseInt(this.buyStocks, 10);
        this.investor.cash -=
          parseInt(this.buyStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            imcruzStocks: this.investor.imcruzStocks
          });
      }
      if ("MONTERREY" === this.company.id) {
        this.investor.monterreyStocks += parseInt(this.buyStocks, 10);
        this.investor.cash -=
          parseInt(this.buyStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            monterreyStocks: this.investor.monterreyStocks
          });
      }
      if ("PIL" === this.company.id) {
        this.investor.pilStocks += parseInt(this.buyStocks, 10);
        this.investor.cash -=
          parseInt(this.buyStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            pilStocks: this.investor.pilStocks
          });
      }
      if ("POLLOSCOPACABANA" === this.company.id) {
        this.investor.polloscopacabanaStocks += parseInt(this.buyStocks, 10);
        this.investor.cash -=
          parseInt(this.buyStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            polloscopacabanaStocks: this.investor.polloscopacabanaStocks
          });
      }
      if ("SOBOCE" === this.company.id) {
        this.investor.soboceStocks += parseInt(this.buyStocks, 10);
        this.investor.cash -=
          parseInt(this.buyStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            soboceStocks: this.investor.soboceStocks
          });
      }
      this.buyStocks = 0;
      this.exchangeStateBuy();
    },
    //Change state so Investor can sell Stocks
    exchangeStateSell: function() {
      this.exchangeSell = !this.exchangeSell;
      this.exchange = !this.exchange;
    },
    stockSell: function() {
      this.company.companyAvailableStocks += parseInt(this.sellStocks, 10);
      this.company.companyCash -=
        this.sellStocks * this.company.companyStockValue;
      this.company.companyNetWorth =
        this.company.companyCash +
        this.company.companyAvailableStocks * this.company.companyStockValue;
      db.collection("Companies")
        .doc(this.company.id)
        .update({
          companyAvailableStocks: this.company.companyAvailableStocks,
          companyCash: this.company.companyCash,
          companyNetWorth: this.company.companyNetWorth
        });

      if ("AVÍCOLASOFIA" === this.company.id) {
        this.investor.sofiaStocks -= parseInt(this.sellStocks, 10);
        this.investor.cash +=
          parseInt(this.sellStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            sofiaStocks: this.investor.sofiaStocks
          });
      }
      if ("CBN" === this.company.id) {
        this.investor.cbnStocks -= parseInt(this.sellStocks, 10);
        this.investor.cash +=
          parseInt(this.sellStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            cbnStocks: this.investor.cbnStocks
          });
      }
      if ("EMBOL" === this.company.id) {
        this.investor.embolStocks -= parseInt(this.sellStocks, 10);
        this.investor.cash +=
          parseInt(this.sellStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            embolStocks: this.investor.embolStocks
          });
      }
      if ("FARMACORP" === this.company.id) {
        this.investor.farmacorpStocks -= parseInt(this.sellStocks, 10);
        this.investor.cash +=
          parseInt(this.sellStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            farmacorpStocks: this.investor.farmacorpStocks
          });
      }
      if ("FINO" === this.company.id) {
        this.investor.finoStocks -= parseInt(this.sellStocks, 10);
        this.investor.cash +=
          parseInt(this.sellStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            finoStocks: this.investor.finoStocks
          });
      }
      if ("IMCRUZ" === this.company.id) {
        this.investor.imcruzStocks -= parseInt(this.sellStocks, 10);
        this.investor.cash +=
          parseInt(this.sellStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            imcruzStocks: this.investor.imcruzStocks
          });
      }
      if ("MONTERREY" === this.company.id) {
        this.investor.monterreyStocks -= parseInt(this.sellStocks, 10);
        this.investor.cash +=
          parseInt(this.sellStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            monterreyStocks: this.investor.monterreyStocks
          });
      }
      if ("PIL" === this.company.id) {
        this.investor.pilStocks -= parseInt(this.sellStocks, 10);
        this.investor.cash +=
          parseInt(this.sellStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            pilStocks: this.investor.pilStocks
          });
      }
      if ("POLLOSCOPACABANA" === this.company.id) {
        this.investor.polloscopacabanaStocks -= parseInt(this.sellStocks, 10);
        this.investor.cash +=
          parseInt(this.sellStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            polloscopacabanaStocks: this.investor.polloscopacabanaStocks
          });
      }
      if ("SOBOCE" === this.company.id) {
        this.investor.soboceStocks -= parseInt(this.sellStocks, 10);
        this.investor.cash +=
          parseInt(this.sellStocks, 10) * this.company.companyStockValue;
        db.collection("Investors")
          .doc(this.email)
          .update({
            cash: this.investor.cash,
            soboceStocks: this.investor.soboceStocks
          });
      }
      this.sellStocks = 0;
      this.exchangeStateSell();
    }
  }
};
</script>

<style lang="scss" scoped></style>
