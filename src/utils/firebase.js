// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa5D86XyG_62caOjJEmaMPBHdkJ8VCQXo",
  authDomain: "netflixgpt-a35f7.firebaseapp.com",
  projectId: "netflixgpt-a35f7",
  storageBucket: "netflixgpt-a35f7.firebasestorage.app",
  messagingSenderId: "1051616217523",
  appId: "1:1051616217523:web:5ad468ed7e41fdc3fe23c6",
  measurementId: "G-V4ZYLW2CW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();