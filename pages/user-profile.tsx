import React from "react";
import Head from "next/head";
import EditProfile from "../components/Profile/EditProfile";
import UserPresentation from "../components/Profile/UserPresentation";
import Available from "../components/Profile/Available";
import AboutMe from "../components/Profile/AboutMe";
import Skills from "../components/Profile/Skills";
import Experience from "../components/Profile/Experience";
import Equipment from "../components/Profile/Equipment";

export default function UserProfile() {
  return (
    <>
      <Head>
        <title>H&W Innovations | Profil </title>
      </Head>
      <div className="md:mx-32 mt-20">
        {/*User presentation section*/}
        <div className="flex justify-center sm:rounded-none md:rounded-3xl mb-10 h-64 shadow-lg">
          <div className="flex flex-row w-full sm:rounded-none md:rounded-3xl  bg-primary-color">
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
        {/*About me and skills section*/}
        <div className="md:flex flex-row">
          <div className="bg-profile-sections md:w-1/2 m-2 rounded-2xl shadow-md">
            <AboutMe title="Om mig" />
          </div>
          <div className="bg-profile-sections md:w-1/2 m-2 rounded-2xl shadow-md">
            <Skills />
          </div>
        </div>
        {/*Experience section*/}
        <div className="bg-profile-sections shadow-md m-2 mt-5 rounded-2xl">
          <Experience />
        </div>
        <div className="bg-profile-sections shadow-md m-2 mt-5 rounded-2xl">
          <Equipment />
        </div>
      </div>
    </>
  );
}