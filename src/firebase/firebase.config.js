// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqJ82DYW-Ypho5v64_EFfx1cZb-YlXreM",
    authDomain: "auth-integration-90f8b.firebaseapp.com",
    projectId: "auth-integration-90f8b",
    storageBucket: "auth-integration-90f8b.firebasestorage.app",
    messagingSenderId: "179057194569",
    appId: "1:179057194569:web:052a488b42ba97e453f198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;