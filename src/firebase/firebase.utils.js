import firebase from 'firebase/app';
import'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWmlcLWEs9PONdKj1GCalVbe92cSBSWeY",
    authDomain: "etv-db.firebaseapp.com",
    databaseURL: "https://etv-db.firebaseio.com",
    projectId: "etv-db",
    storageBucket: "etv-db.appspot.com",
    messagingSenderId: "784570915120",
    appId: "1:784570915120:web:9b3c5d12edad509a3a50f5",
    measurementId: "G-WC5P00LFYK"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;