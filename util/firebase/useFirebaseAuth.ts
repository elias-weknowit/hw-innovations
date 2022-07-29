import { getAuth } from 'firebase/auth';
import { Auth, UserCredential, GoogleAuthProvider } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { signInWithRedirect, getRedirectResult as _getRedirectResult, signInWithEmailAndPassword as _signInWithEmailAndPassword, createUserWithEmailAndPassword as _createUserWithEmailAndPassword } from 'firebase/auth';

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email
});

export interface FireBaseAuthHook {
  authUser: Auth | null,
  loading: boolean,
  signInWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>,
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>,
  signInWithGoogleRedirect: () => Promise<never>,
  getRedirectResult: () => Promise<UserCredential>,
  signOut: () => Promise<void>,
}

export default function useFirebaseAuth(): FireBaseAuthHook {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth();

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);    
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email: string, password: string) => _signInWithEmailAndPassword(auth, email, password);

  const createUserWithEmailAndPassword = (email: string, password: string) => _createUserWithEmailAndPassword(auth, email, password);

  const signInWithGoogleRedirect = () => signInWithRedirect(auth, new GoogleAuthProvider());

  const getRedirectResult = () => _getRedirectResult(auth);

  const signOut = () => auth.signOut().then(clear);

// listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithGoogleRedirect,
    getRedirectResult,
    signOut
  };
}