import Head from "next/head";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Loginform from "../../components/Login/Loginform";
import AlternateLogins from "../../components/Login/AlternateLogins";
import landing_img from "../../public/manWorking.svg";
import { Divider } from '@mui/material';

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
          <div className="p-6 flex flex-col">
            <div className="flex m-0 mt-6 justify-center">
              <Image src={logo} width={370} height={123} />
            </div>
            <Loginform />
            <a href="" className="m-8 self-center text-light-text">Glömt lösenord?</a>
            <div>
              <Divider className='text-light-text'>Eller fortsätt med</Divider>
            </div>
           

            <AlternateLogins className="p-6" enableApple enableFacebook enableGoogle/>
            <p className="self-center text-light-text">Har du inget konto? <a href="" className='text-primary-color'>Registrera</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
