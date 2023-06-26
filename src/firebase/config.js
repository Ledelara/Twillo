// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcdA1EiEemdh1rI8v085jwXAjGpHuOnak",
  authDomain: "twillo-data.firebaseapp.com",
  projectId: "twillo-data",
  storageBucket: "twillo-data.appspot.com",
  messagingSenderId: "149102669188",
  appId: "1:149102669188:web:ab190b5b132d8a977b41d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };