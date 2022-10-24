import React from "react";
import Head from "next/head";
import Profile from "../components/Profile/Profile";
import { useAuth } from "../components/firebase/AuthUserProvider";
import { User } from "firebase/auth";
import { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
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
    const res = await uploadBytes(storageRef, file).then((snapshot) => {
      //Get download URL and update pictureURL paramater in user
      getDownloadURL(storageRef).then((url) => {
        updateProfile({ photoURL: url });
        axios.put("/api/users", { photoURL: url });
      });
      ;
    }).catch((error) => { return 500 });
  };


  const onSubmit = async (formData: {
    user: User;
    image: File | null;
  }) => {
    if (!user) {
      console.log("User not initialized");
      return;
    }

    console.log("Submitted:", formData)
    try {
      if (formData.image) {
        const res = await uploadProfilePicture(formData.image, user.uid);
      } else {
        updateProfile({ displayName: formData.user.displayName }, user);
      }
    } catch (error) {
      setError(error.message);
    }

    return false; // Prevents page refresh
  }

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
