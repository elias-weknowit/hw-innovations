import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@mui/material";

import CreateAccountForm from "../components/Create-Account/CreateAccountForm";
import landing_img from "../public/manWorking.svg";
import AlternateLogins from "../components/Login/AlternateLogins";
import Footer from "../components/Footer/Footer";

interface UserProfileDto {
  fullName: string;
  info: string;
  skills: string[];
  experience: {title: string, provider; string, startDate: string, endDate: string}[];
}

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

            <div className="mt-12">
              <Divider className="text-light-text">Eller fortsätt med</Divider>
            </div>

            <AlternateLogins
              className="p-6"
              enableFacebook
              enableGoogle
              enableApple
            />
            <p className="self-center text-light-text">
              Har du redan ett konto?{" "}
              <Link href="/login">
                <a className="text-primary-color">
                  Logga in
                </a>
              </Link>
              
            </p>
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
    </>
  );
}
