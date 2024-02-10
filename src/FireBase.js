import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCYt2n_kJt-K5f4HB3QGiRQ-gqqJ7Eq07s",
  authDomain: "naksha-bd.firebaseapp.com",
  projectId: "naksha-bd",
  storageBucket: "naksha-bd.appspot.com",
  messagingSenderId: "494872194880",
  appId: "1:494872194880:web:d2a202bebb701a2c1bd4a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore()
export {db}