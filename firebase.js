// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX00GjPHiDc4q2aKgGhSDCXdF6By45msI",
  authDomain: "social-sparrow-317fe.firebaseapp.com",
  projectId: "social-sparrow-317fe",
  storageBucket: "social-sparrow-317fe.appspot.com",
  messagingSenderId: "246218152875",
  appId: "1:246218152875:web:00cc8a1d68adbf670510ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)