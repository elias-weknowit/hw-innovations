import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

export default function FirebaseProvider() {
  // if a Firebase instance doesn't exist, create one
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  const auth = getAuth();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    createUserWithEmailAndPassword("rasmus.lyxell@weknowit.se", "123456")
      .then((userCredential) => {
        console.log("Created a new profile!");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>Hej, jag är kopplad!</p>
      {loading && <p>Loading...</p>}
      {user ? user.user.email : <p>Finns en användare</p>}
      {!!error && <p>{error.message}</p>}
    </div>
  );
}
