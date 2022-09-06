import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../components/firebase/AuthUserProvider";
import logo from "../../public/Logo.svg";

import CreateAccountForm from "../../components/Create-Account/CreateAccountForm";
import CreateAccountCompany from "../../components/Create-Account/CreateAccountCompany";
import landing_img from "../../public/CreateImg.png";
import RadioButton from "../../components/Login/RegisterRadioButton";

interface UserProfileDto {
  fullName: string;
  info: string;
  skills: string[];
  experience: {
    title: string;
    provider;
    string;
    startDate: string;
    endDate: string;
  }[];
}

export default function CreateAccountView() {
  const [selectedRadio, setSelectedRadio] = useState<string>();

  //Redirect to homepage if user is already logged in
  const { loading, user } = useAuth();
  const router = useRouter();
  if (!loading && user) {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Work 2 Do | Skapa konto </title>
      </Head>
      <div className="flex flex-row bg-background-white-color">
        <div className="flex flex-2 mt-8 flex-grow flex-col min-h-screen w-auto items-center justify-center">
          <div className="flex mb-6  items-center justify-center">
            <Image alt={"Logo"} src={logo} width={370} height={123} />
          </div>
          <div className="p-4 flex flex-col">
            <div className="flex flex-col flex-grow w-80 font-mulish mt-2">
              <h1 className="justify-start font-semibold text-3xl">
                Skapa konto
              </h1>
              <p className="justify-start mt-3 text-lg">
                Hitta någon som kan hjälpa dig eller hjälpa någon med det du
                kan.
              </p>
            </div>
            <RadioButton
              alt_one="Privarperson"
              value_one="private"
              alt_two="Företag"
              value_two="company"
              onChange={(e) => {
                setSelectedRadio(e.target.value);
              }}
            />
            {selectedRadio === "company" ? (
              <CreateAccountCompany />
            ) : (
              <CreateAccountForm />
            )}

            <p className="self-center text-light-text p-10">
              Har du redan ett konto?{" "}
              <Link href="/login">
                <a className="text-primary-color">Logga in</a>
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

/*CreateAccountView.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};*/
