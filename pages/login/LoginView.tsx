import Head from "next/head";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Loginform from "../../components/Login/Loginform";
import landing_img from "../../public/manWorking.svg";

export default function LoginView() {
  return (
    <>
      <Head>
        <title>HW Innovations | Välkommen </title>
      </Head>

      <div className="flex flex-row bg-background-white-color">
        <div className="w-1/2 min-h-screen relative hidden md:inline ">
          <Image
            src={landing_img}
            alt="Landing picture for the website"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
          />
        </div>

        <div className="flex flex-2 flex-grow flex-col w-auto items-center justify-center">
          <div className="p-6">
            <div className="flex m-0 mt-6 justify-center">
              <Image src={logo} width={370} height={123} />
            </div>
            <Loginform />
          </div>
        </div>
      </div>
    </>
  );
}
