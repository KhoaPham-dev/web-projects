import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCrlnDp7_MnSX-we70ZQGeRgHL2LltpI7Y",
    authDomain: "englishvocab-d87c4.firebaseapp.com",
    databaseURL: "https://englishvocab-d87c4.firebaseio.com",
    projectId: "englishvocab-d87c4",
    storageBucket: "englishvocab-d87c4.appspot.com",
    messagingSenderId: "1074378769766",
    appId: "1:1074378769766:web:aa4cc5a0f78ca0335e74a7"
  };

const app = firebase.initializeApp(firebaseConfig)
const db = firebase.database();
export { app, db }