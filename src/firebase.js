import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDafSzGZ3gGgjiMrFq3C9M_mpRhKWTD7EE",
  authDomain: "jrp-dev.firebaseapp.com",
  projectId: "jrp-dev",
  storageBucket: "jrp-dev.appspot.com",
  messagingSenderId: "122470299179",
  appId: "1:122470299179:web:ee88d71b510a852b3ddc6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const _ = getAnalytics(app);
const db = getFirestore(app)

export {
    db
}