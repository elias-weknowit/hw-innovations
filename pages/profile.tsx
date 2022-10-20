import React from "react";
import Head from "next/head";
import Profile from "../components/Profile/Profile";
import { useAuth } from "../components/firebase/AuthUserProvider";
import { User } from "firebase/auth";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage
} from "firebase/storage";

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const uploadProfilePicture = async (file: File, userId: string) => {
    const storage = getStorage();

    const storageRef = ref(storage, `images/profilePictures/${userId}.jpg`);
    const res = await uploadBytes(storageRef, file).then(async (snapshot) => {
      console.log(snapshot)
      const url = await getDownloadURL(snapshot.ref).then((url) => {
        updateProfile({ photoURL: url }, user)
      })
      return url;
    }).catch((error) => { console.log(error) });
    console.log(res)
    return res
  };


  const onSubmit = async (formData: {
    user: User;
    image: File | null;
  }) => {
    console.log("Submitted:", formData)
    try {
      if (formData.image) {
        const url = await uploadProfilePicture(formData.image, user.uid);
      } else {
        updateProfile({ displayName: formData.user.displayName }, user);
      }
      axios.put("/api/users", user, {
        headers: {
          "Content-Type": "application/json",
        }
      })
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <Head>
        <title>Work 2 Do | Profil</title>
      </Head>

      <Profile
        user={user}
        onSubmit={onSubmit}
        onDelete={() => { }}
      />

      {error ?? <p>{error}</p>}
    </>
  );
}
