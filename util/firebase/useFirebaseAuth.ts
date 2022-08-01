import { getAuth, User } from 'firebase/auth';
import { Auth, UserCredential, GoogleAuthProvider } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { signInWithRedirect, getRedirectResult as _getRedirectResult, signInWithEmailAndPassword as _signInWithEmailAndPassword, createUserWithEmailAndPassword as _createUserWithEmailAndPassword } from 'firebase/auth';

export interface FireBaseAuthHook {
  user: User | null,
  loading: boolean,
  signInWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>,
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>,
  signInWithGoogleRedirect: () => Promise<never>,
  getRedirectResult: () => Promise<UserCredential>,
  signOut: () => Promise<void>,
}

export default function useFirebaseAuth(): FireBaseAuthHook {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth();

  const authStateChanged = async (authState: User) => {
    if (!authState) {
      setUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    setUser(authState);    
    setLoading(false);
  };

  const clear = () => {
    setUser(null);
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
    user,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithGoogleRedirect,
    getRedirectResult,
    signOut
  };
}