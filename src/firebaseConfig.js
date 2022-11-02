// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZz2Nuyuj3Av8XXZdijaMy-kjKJaKuWjs",
  authDomain: "ifluenzia-app.firebaseapp.com",
  projectId: "ifluenzia-app",
  storageBucket: "ifluenzia-app.appspot.com",
  messagingSenderId: "797560102896",
  appId: "1:797560102896:web:71476c763e1bb4ba360735",
  measurementId: "G-DF724K2C33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);