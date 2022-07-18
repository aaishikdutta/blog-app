import { initializeApp, applicationDefault, getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";


let auth;

try{
  auth = getAuth(getApp("admin"));
}catch(err){
    initializeApp(
    {
      credential: applicationDefault(),
    },
    "admin"
  );
  auth = getAuth(getApp('admin'));
}

export const adminAuth = auth;


