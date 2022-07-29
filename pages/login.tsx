import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Loginform from "../components/Login/Loginform";
import AlternateLogins from "../components/Login/AlternateLogins";
import landing_img from "../public/manWorking.svg";
import { Divider } from "@mui/material";
import Footer from "../components/Footer/Footer";
import { useAuth } from "../components/firebase/AuthUserProvider";



export default function LoginView() {
  const { signInWithEmailAndPassword } = useAuth();
  
  const onSubmit = (formData: {user: string, password: string}) => {
    signInWithEmailAndPassword(formData.user, formData.password)
      .then( userCredential => console.log(JSON.stringify(userCredential)))
      .catch(console.log);
  }

  return (
    <>
      <Head>
        <title>HW Innovations | Logga in </title>
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

        <div className="flex flex-2 flex-grow flex-col min-h-screen w-auto items-center justify-center">
          <div className="p-4 flex flex-col">
            <div className="flex m-0 justify-center">
              <Image src={logo} width={370} height={123} />
            </div>
            <Loginform onSubmit={(loginData => onSubmit(loginData))} />
            <a href="" className="m-8 self-center text-primary-color">
              Glömt lösenord?
            </a>
            <div>
              <Divider className="text-light-text">Eller fortsätt med</Divider>
            </div>

            <AlternateLogins
              className="p-6"
              enableApple
              enableFacebook
              enableGoogle
            />
            <p className="self-center text-light-text">
              Har du inget konto?{" "}
              <Link href="/create-account/CreateAccountView">
                <a
                  className="text-primary-color"
                >
                  Registrera
                </a>
              </Link>
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
