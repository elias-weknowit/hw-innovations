import React from "react";
import Head from "next/head";
import EditProfile from "../components/Profile/EditProfile";
import UserPresentation from "../components/Profile/UserPresentation";
import Available from "../components/Profile/Available";
import AboutMe from "../components/Profile/AboutMe";
import SkillsComponent from "../components/Profile/SkillSection/SkillsBox";
import Experience from "../components/Profile/ExperienceSection/ExperienceBox";
import Equipment from "../components/Profile/EquipmentSection/EquipmentBox";
import Navbar from "../components/Navbar/Navbar";
import { useAuth } from "../components/firebase/AuthUserProvider";

export default function UserProfile() {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>H&W Innovations | Profil </title>
      </Head>

      <div className="md:mx-32 mt-10 md:mt-20">
        {/*User presentation section*/}

        <div className="flex flex-row w-full md:rounded-3xl mb-10 h-64 shadow-lg mt-32 bg-primary-color">
          <div className="w-1/3 md:w-1/2 flex justify-start md:m-3">
            <UserPresentation
              userName="Emil Emilsson"
              userPosition="Umeå, Sverige"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-end justify-around md:m-3 text-white">
            <div className="mr-1">
              <EditProfile />
            </div>
            <div className=" md:h-1/2 w-full md:w-1/2 mr-1">
              <div className="rounded-2xl bg-profile-available h-full w-full">
                <Available startDate="17 maj 2022" endDate="31 aug 2022" />
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
            <SkillsComponent />
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
