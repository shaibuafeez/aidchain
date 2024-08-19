// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmQIjKw6ls_zHJZhCuod1CQ_I-5JoUo9Q",
  authDomain: "aidchain-f7c80.firebaseapp.com",
  projectId: "aidchain-f7c80",
  storageBucket: "aidchain-f7c80.appspot.com",
  messagingSenderId: "4387409478",
  appId: "1:4387409478:web:aed37bbef5397ed9e00447",
  measurementId: "G-6ZDE9SPTBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Google Auth Provider setup
const googleProvider = new GoogleAuthProvider();

// Function to handle Google Sign-In
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log('User Info:', user); // You can handle user information here
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

export { auth, signInWithGoogle };
