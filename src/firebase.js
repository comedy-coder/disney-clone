import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAm57_-3V0iTEBQGwz4wLgVp9njZ_v0Iuw",
    authDomain: "disney-clone-c8986.firebaseapp.com",
    projectId: "disney-clone-c8986",
    storageBucket: "disney-clone-c8986.firebasestorage.app",
    messagingSenderId: "615838449787",
    appId: "1:615838449787:web:920f8f08410260691ea2de",
    measurementId: "G-TBDM5KVWRW"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth , provider, storage}  ;
export default db;