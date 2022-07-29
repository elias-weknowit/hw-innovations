import React from "react";
import Head from "next/head";
import EditProfile from "../../components/Profile/EditProfile";
import UserPresentation from "../../components/Profile/UserPresentation";
import Available from "../../components/Profile/Available";

export default function UserProfile() {
  return (
    <>
      <Head>
        <title>H&W Innovations | Profil </title>
      </Head>
      <div className="mx-32">
        <div className="flex justify-center sm:rounded-none md:rounded-3xl mt-10 mb-10 h-64 shadow-lg">
          <div className="flex flex-row w-full sm:rounded-none md:rounded-3xl bg-primary-color">
            <div className="w-1/2 flex justify-start m-3">
              <UserPresentation
                userName="Emil Emilsson"
                userPosition="Umeå, Sverige"
              />
            </div>
            <div className="flex flex-col items-end justify-around w-full m-3 text-white">
              <div className="h-1/3">
                <EditProfile />
              </div>
              <div className="flex h-1/2 w-1/2">
                <div className="flex rounded-3xl bg-profile-available h-full w-full">
                  <Available startDate="17 maj 2022" endDate="31 aug 2022" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
