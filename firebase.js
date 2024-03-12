// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaNa7DOxs2mfnPMjFCTcOk_3N8ZvtN8kU",
  authDomain: "notes-app-31913.firebaseapp.com",
  projectId: "notes-app-31913",
  storageBucket: "notes-app-31913.appspot.com",
  messagingSenderId: "776505358133",
  appId: "1:776505358133:web:4b12bccd7a5287d4407e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");