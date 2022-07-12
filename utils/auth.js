import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/init";

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const setRegisteredUser = (uid, firstName, lastName, username, email) => {
  const docRef = doc(db, "users", uid);
  return setDoc(docRef, {
    firstName,
    lastName,
    username,
    email
  });
}

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
