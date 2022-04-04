import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC4Z8K10VI3hiJw6bI-N0fxUqWUo13m58w",
    authDomain: "robinhood-acb28.firebaseapp.com",
    projectId: "robinhood-acb28",
    storageBucket: "robinhood-acb28.appspot.com",
    messagingSenderId: "627171595739",
    appId: "1:627171595739:web:f3680c4f43b942d3c883fe"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };