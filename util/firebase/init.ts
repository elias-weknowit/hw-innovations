import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, browserSessionPersistence} from "firebase/auth";
import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  };

export function initFirebase(): boolean{
    // if a Firebase instance doesn't exist, create one
  if(getApps().length === 0) initializeApp(firebaseConfig);

  //Return result of initliazing Firebase
  return getApps().length > 0;
}

export function initFirestore(): boolean {
  return false;
}

export function initAuth(): boolean {
  const auth = getAuth();
  auth.setPersistence(browserSessionPersistence);
  return false;
}