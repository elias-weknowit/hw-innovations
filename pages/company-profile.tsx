import React from "react";
import Head from "next/head";
import UserPresentation from "../components/Profile/UserPresentation";
import EditProfile from "../components/Profile/EditProfile";
import AboutMe from "../components/Profile/AboutMe";
import Contact from "../components/Profile/Contact";
import { useAuth } from "../components/firebase/AuthUserProvider";
import logo from "../public/Logo.svg";

export default function companyProfile() {
  const { user } = useAuth();
  return (
    <div className="px-8 sm:px-12 md:px-16 lg:px-32">
      <>
        <Head>
          <title>H&W Innovations | Profil </title>
        </Head>
        <div className="mt-10 md:mt-20">
          {/*Company presentation section*/}

          <div className="flex flex-row w-full rounded-2xl mb-10 h-64 shadow-lg mt-32 bg-primary-color">
            <div className="flex flex-row w-full">
              <div className="w-1/3 md:w-1/2 flex justify-start md:m-3 p-2">
                <UserPresentation
                  username="NCC"
                  image={user?.photoURL ? user.photoURL : logo}
                  userPosition="Umeå, Sverige"
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
          <div className="md:flex flex-row">
            <div className="bg-profile-sections md:w-1/2 m-3 rounded-xl shadow-md">
              <AboutMe title="Om oss" />
            </div>
            <div className="bg-profile-sections md:w-1/2 m-3 rounded-xl  shadow-md">
              <Contact />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
