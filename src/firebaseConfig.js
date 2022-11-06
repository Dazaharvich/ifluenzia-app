// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ-Qh4j8ERQOxosVqdcmsE_tQSI8EGCIs",
  authDomain: "ifluenzia-app-1.firebaseapp.com",
  projectId: "ifluenzia-app-1",
  storageBucket: "ifluenzia-app-1.appspot.com",
  messagingSenderId: "551711663705",
  appId: "1:551711663705:web:0a1c0d6d7e31dc34fcb348"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);