// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFkn7qmbVO1mMf6qFYhKJF7aBuyusz2A4",
  authDomain: "ai-flashcards-77cee.firebaseapp.com",
  projectId: "ai-flashcards-77cee",
  storageBucket: "ai-flashcards-77cee.appspot.com",
  messagingSenderId: "380355251333",
  appId: "1:380355251333:web:1ecac5b1e3cb6165f8edec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
