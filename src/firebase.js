import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA1zwE8TN4zBz_-jB6n5YMob6wC55xiKrI",
  authDomain: "whatsappreactclone.firebaseapp.com",
  databaseURL: "https://whatsappreactclone.firebaseio.com",
  projectId: "whatsappreactclone",
  storageBucket: "whatsappreactclone.appspot.com",
  messagingSenderId: "162510132499",
  appId: "1:162510132499:web:699b4b250ff71a992636e6",
  measurementId: "G-JG5B458HEQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.database().ref();
const db = firebase.firestore();
const auth = firebase.auth();
firebase.firestore().settings({ experimentalForceLongPolling: true });
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;