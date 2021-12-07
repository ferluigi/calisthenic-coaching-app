
import firebase from "firebase/app";
import "firebase/firestore";

require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL:
    "https://coaching-page-70dc9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "coaching-page-70dc9",
  storageBucket: process.env.FIREBASE_SB,
  messagingSenderId: process.env.FIREBASE_MSSID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MID,
  
};

// Initialize Firebase


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();