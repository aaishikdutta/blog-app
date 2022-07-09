import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const signin = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);   
};
