// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeGfRTE-q17ffj_SjDqVtVI1Sh5IfFQSc",
    authDomain: "ema-johm-auth.firebaseapp.com",
    projectId: "ema-johm-auth",
    storageBucket: "ema-johm-auth.appspot.com",
    messagingSenderId: "266431658595",
    appId: "1:266431658595:web:6ad1eb09b410e66ccad656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;