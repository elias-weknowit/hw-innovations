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

      <div className="flex bg-background-white-color">
        <div className="w-1/2 h-auto min-h-screen content-center">
          <Image src={landing_img} alt="Landing picture for the website" />
        </div>

        <div className="flex flex-col w-1/3">
          <div className="flex ml-32 mt-24">
            <Image src={logo} width={370} height={123} />
          </div>
          <Loginform />
        </div>
      </div>
    </>
  );
}
