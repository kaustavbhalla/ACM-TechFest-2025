import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtB3hxI7hOP5nadjg-JLL1FPgsgNr1onw",
  authDomain: "brainwave-backend.firebaseapp.com",
  projectId: "brainwave-backend",
  storageBucket: "brainwave-backend.firebasestorage.app",
  messagingSenderId: "737552421095",
  appId: "1:737552421095:web:05ec72823c628675481242",
  measurementId: "G-6RY7J4QD9N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, signOut, db };
