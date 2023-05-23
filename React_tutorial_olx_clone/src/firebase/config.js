import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase';
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3tCOLlcDoiLeyZaCJZBteYMZtVLDuF5A",
  authDomain: "olx-clone-aae53.firebaseapp.com",
  projectId: "olx-clone-aae53",
  storageBucket: "olx-clone-aae53.appspot.com",
  messagingSenderId: "663529593716",
  appId: "1:663529593716:web:f419f37ab300acd944ea21",
  measurementId: "G-1ML8914VR2"
};

export default firebase.initializeApp(firebaseConfig)