import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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

export const signout = () => {
  return signOut(auth);
}

export const updateUserData = (firstName, lastName, username, user) => {
  const uid = user.uid;
  const userRef = doc(db, "users", uid);
  return updateDoc(userRef, {
    firstName: firstName,
    lastName: lastName,
    username: username,
  })
}
