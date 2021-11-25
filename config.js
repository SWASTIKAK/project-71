import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApxNOiKRTB8rH4yrqOkIfCZY-9Z5yPAu4",
    authDomain: "project-72-8af7e.firebaseapp.com",
    projectId: "project-72-8af7e",
    storageBucket: "project-72-8af7e.appspot.com",
    messagingSenderId: "810830273310",
    appId: "1:810830273310:web:668fcb9e81685824dec70f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


