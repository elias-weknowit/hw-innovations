import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { createContext, useContext, Context } from 'react'
import useFirebaseAuth, { FireBaseAuthHook } from '../../util/firebase/useFirebaseAuth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const authUserContext = createContext<FireBaseAuthHook>(null);

export function AuthUserProvider({ children }) {
  // if a Firebase instance doesn't exist, create one
  const auth: FireBaseAuthHook = useFirebaseAuth();
  if(getApps().length === 0) initializeApp(firebaseConfig);

  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export const useAuth = (): FireBaseAuthHook => useContext(authUserContext);