
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDA1nLlZBU39mgqT2lRaGhBqaSLmoSBMds",
    authDomain: "prepwise-497d5.firebaseapp.com",
    projectId: "prepwise-497d5",
    storageBucket: "prepwise-497d5.firebasestorage.app",
    messagingSenderId: "508222420179",
    appId: "1:508222420179:web:0c5a40255d44f9dcae1026",
    measurementId: "G-S92QHHCEXM"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);