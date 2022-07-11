import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/init";

export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const forgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const getCurrentUser = (user) => {
  const uid = user.uid;
  const docRef = doc(db, "users", uid);
  return getDoc(docRef);
};
