// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAhbJaiOzzovgex8iw8bdXt8FNQotGe00",
  authDomain: "thefixers-cbee6.firebaseapp.com",
  projectId: "thefixers-cbee6",
  storageBucket: "thefixers-cbee6.appspot.com",
  messagingSenderId: "498546661130",
  appId: "1:498546661130:web:b7f3248d36206ee2520cf3",
  measurementId: "G-3ZZQXJJ25N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // For Authentication
const db = getFirestore(app); // For Firestore
const analytics = getAnalytics(app); // Optional: Only if analytics is used

// Export Firebase services
export { auth, db, analytics }; // Export `auth`, `db`, and `analytics` as named exports