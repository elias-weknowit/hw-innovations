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

  const uploadProfilePicture = (file: File, userId: string) => {
    const storage = getStorage();

    const storageRef = ref(storage, `images/profilePictures/${userId}.jpg`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log(snapshot)
      getDownloadURL(snapshot.ref).then((url) => {
        return url
      })
    }).catch((error) => { console.log(error) });
  };


  const onSubmit = async (formData: {
    user: User;
    image: File | null;
  }) => {
    console.log("Submitted:", formData)
    try {
      if (formData.image) {
        uploadProfilePicture(formData.image, user.uid);
      }
      updateProfile({ displayName: formData.user.displayName }, user);
      axios.put("/api/users", formData.user, {
        headers: {
          "Content-Type": "application/json",
        }
      }).then((res) => {
        console.log("Submit return", res);
        //updateProfile({ displayName: formData.displayName, photoURL: res.data });
      }).catch((error) => { console.log(error) });
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
