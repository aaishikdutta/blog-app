import { initializeApp, applicationDefault, getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

if (!getApp("admin")) {
  initializeApp(
    {
      credential: applicationDefault(),
    },
    "admin"
  );
}

export const adminAuth = getAuth(getApp("admin"));
