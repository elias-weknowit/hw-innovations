import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Divider } from "@mui/material";

import CreateAccountForm from "../../components/Create-Account/CreateAccountForm";
import landing_img from "../../public/manWorking.svg";
import AlternateLogins from "../../components/Login/AlternateLogins";
import Footer from "../../components/Footer/Footer";

export default function CreateAccountView() {
  return (
    <>
      <Head>
        <title>HW Innovations | Skapa konto </title>
      </Head>
      <div className="flex flex-row bg-background-white-color">
        <div className="flex flex-2 flex-grow flex-col min-h-screen w-auto items-center justify-center">
          <div className="p-4 flex flex-col">
            <CreateAccountForm />
            <div className="m-14">
              <Divider className="text-light-text"></Divider>
            </div>
            <p className="self-center text-light-text">
              Har du redan ett konto?{" "}
              <a href="/login/LoginView" className="text-primary-color">
                Logga in
              </a>
            </p>
            <AlternateLogins className="p-6" enableFacebook enableMail />
          </div>
        </div>

        <div className="w-1/2 min-h-screen relative hidden md:inline ">
          <Image
            src={landing_img}
            alt="Landing picture for the website"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
