import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Loginform from "../components/Login/Loginform";
import AlternateLogins from "../components/Login/AlternateLogins";
import landing_img from "../public/LoginImg.png";
import { Divider } from "@mui/material";
import Footer from "../components/Footer/Footer";
import { useAuth } from "../components/firebase/AuthUserProvider";
import { useRouter } from "next/router";

export type LoginError = {
  message: string;
  type: "email" | "password" | "both";
};

export default function LoginView() {
  const { signInWithEmailAndPassword } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<LoginError | null>(null);

  const onSubmit = (formData: { user: string; password: string }) => {
    signInWithEmailAndPassword(formData.user, formData.password)
      .then((userCredential) => {
        router.push("/");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            setError({
              message: "E-postadressen hittades inte",
              type: "email",
            });
            break;
          case "auth/wrong-password":
            setError({ message: "Fel lösenord", type: "password" });
            break;
          default:
            setError({ message: "Något gick fel", type: "both" });
        }
      });
  };

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
            <Loginform
              error={error}
              onSubmit={(loginData) => onSubmit(loginData)}
            />
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
              <Link href="/create-account">
                <a className="text-primary-color">Registrera</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
