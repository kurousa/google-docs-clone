import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA9LniKOOe-MvWN03VTMIiwoL1sNzKnQAA",
    authDomain: "docs-clone-17f0d.firebaseapp.com",
    projectId: "docs-clone-17f0d",
    storageBucket: "docs-clone-17f0d.appspot.com",
    messagingSenderId: "776488389400",
    appId: "1:776488389400:web:e13830f068274be27eac6d"
  };

const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

const db = app.firestore();

export { db };