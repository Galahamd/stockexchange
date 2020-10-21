import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/auth");
var firebaseConfig = {
  apiKey: "AIzaSyAfV7_YuseIiDcKMSuIYy8Bp3eB8V-rdAE",
  authDomain: "stock-exchance-loyola.firebaseapp.com",
  databaseURL: "https://stock-exchance-loyola.firebaseio.com",
  projectId: "stock-exchance-loyola",
  storageBucket: "stock-exchance-loyola.appspot.com",
  messagingSenderId: "150221934685",
  appId: "1:150221934685:web:4326931de38badea75fdb4"
};
export default firebase.initializeApp(firebaseConfig);
