// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEmr4M2PYp1v7jdKMJm2R-DjmIkcI0SmM",
    authDomain: "devtool-db.firebaseapp.com",
    projectId: "devtool-db",
    storageBucket: "devtool-db.appspot.com",
    messagingSenderId: "399322690863",
    appId: "1:399322690863:web:4ff92aeff79f996de01dda",
    measurementId: "G-F915M694DV"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export {firebase};
