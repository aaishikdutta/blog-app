import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/init";

export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);   
};
