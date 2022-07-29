import React from "react";
import Head from "next/head";
import UserPresentation from "../../components/Profile/UserPresentation";
import EditProfile from "../../components/Profile/EditProfile";

export default function companyProfile() {
  return (
    <div>
      <>
        <Head>
          <title>H&W Innovations | Profil </title>
        </Head>
        <div className="mx-32">
          <div className="flex justify-center sm:rounded-none md:rounded-3xl mt-10 mb-10 h-64 shadow-lg">
            <div className="flex flex-row w-full sm:rounded-none md:rounded-3xl bg-primary-color">
              <div className="w-1/2 flex justify-start m-3">
                <UserPresentation
                  userName="Företag AB"
                  userPosition="Stockholm, Sverige"
                />
              </div>
              <div className="flex flex-col items-end w-full m-6 text-white">
                <div className="h-1/3">
                  <EditProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
