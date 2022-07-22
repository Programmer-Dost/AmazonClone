import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRZtXiXcL2OTRGZlPUfl-9BVCNPXamQp8",
  authDomain: "ecommerce-clone-frontend.firebaseapp.com",
  projectId: "ecommerce-clone-frontend",
  storageBucket: "ecommerce-clone-frontend.appspot.com",
  messagingSenderId: "183282373407",
  appId: "1:183282373407:web:228ce0696706ae063b962a",
  measurementId: "G-TBBRH2QGH7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
