// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Auth functions
import { getFirestore } from "firebase/firestore"; // Import Firestore functions
import { getStorage } from "firebase/storage"; // Import Storage functions

const firebaseConfig = {
  apiKey: "AIzaSyDrOfRADI5QQ0Qthp5kz1EX2c5pJCjR7S0",
  authDomain: "sharathi.firebaseapp.com",
  projectId: "sharathi",
  storageBucket: "sharathi.appspot.com",
  messagingSenderId: "468076703093",
  appId: "1:468076703093:web:652566fffafaa10511f73c",
  measurementId: "G-0NMSKWB7M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Storage

export { auth, db, storage }; // Export auth, db, and storage
