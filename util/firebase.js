import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY, //"AIzaSyA9LniKOOe-MvWN03VTMIiwoL1sNzKnQAA",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN, //"docs-clone-17f0d.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID, //"docs-clone-17f0d",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET, //"docs-clone-17f0d.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID, //"776488389400",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID, //"1:776488389400:web:e13830f068274be27eac6d"
  };
const app = !firebase.apps.length 
            ? firebase.initializeApp(firebaseConfig) 
            : firebase.app();
const db = app.firestore();

export { db };
