// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCFXStzIs0tiqTD22kPUA7Z8O4LL-_G5NU",
    authDomain: "tsf-digital-marketing.firebaseapp.com",
    databaseURL: "https://tsf-digital-marketing.firebaseio.com",
    projectId: "tsf-digital-marketing",
    storageBucket: "tsf-digital-marketing.appspot.com",
    messagingSenderId: "34371391101",
    appId: "1:34371391101:web:9b0b947f2b0e4ab083ab14"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth();

  export { firebaseAuth }