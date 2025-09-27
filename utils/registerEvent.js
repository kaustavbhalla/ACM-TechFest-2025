import { db } from "../src/firebaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export async function registerForEvent(uid, eventName) {
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, {
    registeredEvents: arrayUnion(eventName),
  });
}