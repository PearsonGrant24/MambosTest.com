import firebase from 'firebase/compat/app';
//import * as firebase from 'firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKKWKS99sHnoRAXfYhAt3H4h_xvnG_zvs",
    authDomain: "mambosfoodordering.firebaseapp.com",
    databaseURL: "https://mambosfoodordering-default-rtdb.firebaseio.com",
    projectId: "mambosfoodordering",
    storageBucket: "mambosfoodordering.appspot.com",
    messagingSenderId: "10133529473",
    appId: "1:10133529473:web:57d9184c007160730dfe80",
    measurementId: "G-P7F4J16JJX"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage}
