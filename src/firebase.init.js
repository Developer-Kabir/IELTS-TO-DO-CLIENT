// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA795rwDDn__2D-b874TpHrpN0nPF_mcqA",
  authDomain: "to-do-baffe.firebaseapp.com",
  projectId: "to-do-baffe",
  storageBucket: "to-do-baffe.appspot.com",
  messagingSenderId: "1007743260349",
  appId: "1:1007743260349:web:e524e75b8ff97b2b7a49d4",
  measurementId: "G-1MBCPB3B5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;