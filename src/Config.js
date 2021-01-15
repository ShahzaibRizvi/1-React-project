import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyD1HlFUlaFZhQ9hHNlCivswpJv9lbxYtCc",
    authDomain: "messenger-71bac.firebaseapp.com",
    projectId: "messenger-71bac",
    storageBucket: "messenger-71bac.appspot.com",
    messagingSenderId: "736626526670",
    appId: "1:736626526670:web:dce328768cbb760e1a039f",
    measurementId: "G-47XJHSWKQ7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();
  const db=firebase.firestore();
  export {auth,db};