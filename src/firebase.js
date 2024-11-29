// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAhbJaiOzzovgex8iw8bdXt8FNQotGe00",
  authDomain: "thefixers-cbee6.firebaseapp.com",
  projectId: "thefixers-cbee6",
  storageBucket: "thefixers-cbee6.firebasestorage.app",
  messagingSenderId: "498546661130",
  appId: "1:498546661130:web:b7f3248d36206ee2520cf3",
  measurementId: "G-3ZZQXJJ25N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);