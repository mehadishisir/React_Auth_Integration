// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// dangerous code below, do not share apiKey in public repos
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBelHUQdgMaO7dowFjdcSAxJTbUxv5EcKc",
  authDomain: "auth-integration-dc011.firebaseapp.com",
  projectId: "auth-integration-dc011",
  storageBucket: "auth-integration-dc011.firebasestorage.app",
  messagingSenderId: "1003178647714",
  appId: "1:1003178647714:web:e9d29a428c5788b1c837fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
