// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChmR3IGn09bdMsJ6YR8EaiXEYIa4Zr0KE",
  authDomain: "gwndolyn.firebaseapp.com",
  projectId: "gwndolyn",
  storageBucket: "gwndolyn.firebasestorage.app",
  messagingSenderId: "1093798227966",
  appId: "1:1093798227966:web:786d51f0f964356341daaf",
  measurementId: "G-JJZJ1N176C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);