// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6YJRgW8WIsXnyUfglD7oR4RDxA71tjds",
  authDomain: "react-game-rpg.firebaseapp.com",
  projectId: "react-game-rpg",
  storageBucket: "react-game-rpg.firebasestorage.app",
  messagingSenderId: "1030657790354",
  appId: "1:1030657790354:web:ea0ba5e1de9a1e2f16b14b",
  measurementId: "G-XVKPD4KDX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);