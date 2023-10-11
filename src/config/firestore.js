// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = import.meta.env.VITE_FIRESTORE_API;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "e-commerce-marcela.firebaseapp.com",
  projectId: "e-commerce-marcela",
  storageBucket: "e-commerce-marcela.appspot.com",
  messagingSenderId: "969645449164",
  appId: "1:969645449164:web:8dd89b8c5d22b163808769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);