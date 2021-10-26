// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB62wbz0t8feyVhuvRmGBg3r7f2ktfdiQk",
  authDomain: "finstreet-assignment.firebaseapp.com",
  projectId: "finstreet-assignment",
  storageBucket: "finstreet-assignment.appspot.com",
  messagingSenderId: "850588860368",
  appId: "1:850588860368:web:847079520c96fa7f8803d5",
  measurementId: "G-20W3RWLVXK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
