import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCLly315H6KpHrnu2tGgiTLk05WipxSmQw",
    authDomain: "crwn-db-a126e.firebaseapp.com",
    databaseURL: "https://crwn-db-a126e.firebaseio.com",
    projectId: "crwn-db-a126e",
    storageBucket: "",
    messagingSenderId: "308715566712",
    appId: "1:308715566712:web:75d8d7e20a865928"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;