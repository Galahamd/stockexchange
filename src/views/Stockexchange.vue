<template>
  <div class="row">
    <div
      class="col s12 l6"
      v-for="corporation in companies"
      :key="corporation.id"
    >
      <Company v-bind:corporation="corporation" />
    </div>
  </div>
</template>

<script>
// Firebase Config
import Firebase from "@/firebaseConfig";
require("firebase/firestore");
var db = Firebase.firestore();
//Components
import Company from "@/components/Company.vue";
export default {
  name: "Stockexchange",
  components: {
    Company
  },
  data: function() {
    return {
      companies: []
    };
  },
  created() {
    db.collection("Companies")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let company = doc.data();
          company.id = doc.id;
          this.companies.push(company);
        });
      });
  }
};
</script>

<style lang="scss" scoped></style>
