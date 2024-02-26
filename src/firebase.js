// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzGXwJwFPBrX06m0StIGPwKU3VawGe5iA",
  authDomain: "netflix-clone-d3719.firebaseapp.com",
  projectId: "netflix-clone-d3719",
  storageBucket: "netflix-clone-d3719.appspot.com",
  messagingSenderId: "892905701497",
  appId: "1:892905701497:web:f05012a2eade959f8394a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
