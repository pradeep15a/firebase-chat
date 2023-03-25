// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwMzBZXfwJTuJjgcOoAMs9cqpLQJ1218k",
  authDomain: "chat-app-pradeep.firebaseapp.com",
  projectId: "chat-app-pradeep",
  storageBucket: "chat-app-pradeep.appspot.com",
  messagingSenderId: "1024094143625",
  appId: "1:1024094143625:web:2119aafb585893bb8eb258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);