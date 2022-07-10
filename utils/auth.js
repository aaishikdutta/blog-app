import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/init";

export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);   
};

export const forgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
}
