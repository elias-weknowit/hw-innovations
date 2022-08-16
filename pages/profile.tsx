import React from "react";
import Head from "next/head";
import Profile from "../components/Profile/Profile";
import { useAuth } from "../components/firebase/AuthUserProvider";

export default function ProfilePage() {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>Work 2 Do | Profil</title>
      </Head>

      <Profile
        onDelete={() => {}}
        onSubmit={() => {}}
        user={user}
        image={null}
      />
    </>
  );
}
