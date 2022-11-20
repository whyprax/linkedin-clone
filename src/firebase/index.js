// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXY6Er52z_YaFhzypEtWdz391BnCEW6as",
  authDomain: "linkedin-clone-f4f39.firebaseapp.com",
  projectId: "linkedin-clone-f4f39",
  storageBucket: "linkedin-clone-f4f39.appspot.com",
  messagingSenderId: "15267786049",
  appId: "1:15267786049:web:60791b0960d20b259ac5c0",
  measurementId: "G-VYV2KT4SKF",
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
