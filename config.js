import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

export const firebaseConfig = {
    apiKey: "AIzaSyDu9P7xj-VYPOgp95-0rfb8LzpspUAgo1s",
    authDomain: "app6-40292.firebaseapp.com",
    projectId: "app6-40292",
    storageBucket: "app6-40292.appspot.com",
    messagingSenderId: "734670355568",
    appId: "1:734670355568:web:5ff3c52f6bed8d60bc08b5",
    measurementId: "G-HLZQYWFHH3"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}