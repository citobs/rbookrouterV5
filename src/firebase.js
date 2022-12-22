import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8k3DtzUbil1r9w-VxGnQ7fda_6ZUK-9g",

  authDomain: "book-clo-b4bd8.firebaseapp.com",

  projectId: "book-clo-b4bd8",

  storageBucket: "book-clo-b4bd8.appspot.com",

  messagingSenderId: "1040260602663",

  appId: "1:1040260602663:web:a12f92cea3bc28202fa702",

  measurementId: "G-1RVN2L4R3D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
