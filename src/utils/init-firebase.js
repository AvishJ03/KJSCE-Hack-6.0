// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABCEobewkuCW7B2Dbr6_tMu0O_fGMA640",
  authDomain: "gamifyingdsa.firebaseapp.com",
  projectId: "gamifyingdsa",
  storageBucket: "gamifyingdsa.appspot.com",
  messagingSenderId: "591378600811",
  appId: "1:591378600811:web:bf9f111f5c005c0e9df22e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
