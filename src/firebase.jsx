import firebase from 'firebase';

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyAcLwyrlf3wEWgBbSCnpSa7z6YhUKJO_UA",
  authDomain: "clone-18dd1.firebaseapp.com",
  databaseURL: "https://clone-18dd1.firebaseio.com",
  projectId: "clone-18dd1",
  storageBucket: "clone-18dd1.appspot.com",
  messagingSenderId: "30175172904",
  appId: "1:30175172904:web:d6cda54a2a16de6318981d",
  measurementId: "G-THTPP22N8F"
});
const db= firebaseApp.firestore();
const auth= firebase.auth();
export {db,auth};