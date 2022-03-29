// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAeIxuAlfATT3t7gQij7tT5JKgY4U_HfY",
  authDomain: "jake-executivegram.firebaseapp.com",
  projectId: "jake-executivegram",
  storageBucket: "jake-executivegram.appspot.com",
  messagingSenderId: "382513930219",
  appId: "1:382513930219:web:1272fd52df4667a28cc3ae"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };