// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdM2GaiZH8Av0RjXpamlIiWIHv_BWIwpo",
  authDomain: "highlight-ac119.firebaseapp.com",
  projectId: "highlight-ac119",
  storageBucket: "highlight-ac119.appspot.com",
  messagingSenderId: "308538954167",
  appId: "1:308538954167:web:beac4ceafae0f211c9d832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Con el export la llamamos a firestore