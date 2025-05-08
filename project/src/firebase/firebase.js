import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBaYQy4Lx5F38Yyi-Wh40pCNudPlcgAqr8",
  authDomain: "devhackathon-28249.firebaseapp.com",
  projectId: "devhackathon-28249",
  storageBucket: "devhackathon-28249.firebasestorage.app",
  messagingSenderId: "73809082519",
  appId: "1:73809082519:web:5a81e86db96d93d9a6d1d2",
  measurementId: "G-BCL32MFHYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};