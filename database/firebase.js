import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC1Xt7GGH5ztgVPYJ3BxMS3Np2o2mUKk5g",
    authDomain: "sm41-ca1aa.firebaseapp.com",
    databaseURL: "https://sm41-ca1aa.firebaseio.com",
    projectId: "sm41-ca1aa",
    storageBucket: "sm41-ca1aa.appspot.com",
    messagingSenderId: "266111242529",
    appId: "1:266111242529:web:f9d6113e537f8438016e60"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
      firebase,
      db
  };