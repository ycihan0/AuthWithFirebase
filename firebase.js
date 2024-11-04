// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAifaYWUy3pNG-VXcf7cwXfWjlgoAfvm0M",
  authDomain: "login-b7027.firebaseapp.com",
  projectId: "login-b7027",
  storageBucket: "login-b7027.firebasestorage.app",
  messagingSenderId: "519718668094",
  appId: "1:519718668094:web:19797822960354a81a0e6f",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };
