import React from "react";
import Head from "next/head";
import UserPresentation from "../components/Profile/UserPresentation";
import EditProfile from "../components/Profile/EditProfile";
import AboutMe from "../components/Profile/AboutMe";
import Contact from "../components/Profile/Contact";

export default function companyProfile() {
  return (
    <div>
      <>
        <Head>
          <title>H&W Innovations | Profil </title>
        </Head>
        <div className="mx-32">
          <div className="flex justify-center sm:rounded-none md:rounded-3xl mb-10 h-64 shadow-lg">
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
          {/*About me and skills section*/}
          <div className="flex flex-row">
            <div className="bg-profile-sections w-1/2 m-3 rounded-xl shadow-md">
              <AboutMe title="Om oss" />
            </div>
            <div className="bg-profile-sections w-1/2 m-3 rounded-xl  shadow-md">
              <Contact />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
