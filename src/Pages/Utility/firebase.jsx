import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFpkrY5R4NaZaolBRG9OsSYwDQcGRsCBU",
  authDomain: "clone-17f5a.firebaseapp.com",
  projectId: "clone-17f5a",
  storageBucket: "clone-17f5a.firebasestorage.app",
  messagingSenderId: "844204247606",
  appId: "1:844204247606:web:e79df15946ec3e448d2697",
  measurementId: "G-97EZGVYQRP"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();