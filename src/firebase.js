// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI2651p8_3wCmLTvDxkW5kfxtsfEWF1Uk",
  authDomain: "react-todo-firebase-2022.firebaseapp.com",
  projectId: "react-todo-firebase-2022",
  storageBucket: "react-todo-firebase-2022.appspot.com",
  messagingSenderId: "565472283274",
  appId: "1:565472283274:web:0c981d1de585622a453b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
