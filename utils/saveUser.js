import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../src/firebaseConfig";

export async function saveUser(user) {
  const userRef = doc(db, "users", user.uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      createdAt: new Date(),
      registeredEvents: [],
    });
  }
}