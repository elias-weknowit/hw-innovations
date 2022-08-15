import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../components/firebase/AuthUserProvider";
import logo from "../../public/Logo.svg";

import CreateAccountForm from "../../components/Create-Account/CreateAccountForm";
import CreateAccountCompany from "../../components/Create-Account/CreateAccountCompany";
import landing_img from "../../public/CreateImg.png";
import Footer from "../../components/Footer/Footer";

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
  const [selectedRadio, setSelectedRadio] = useState<string>("private");

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
        <div className="flex flex-2 flex-grow flex-col min-h-screen w-auto items-center justify-center">
          <div className="flex mb-6 m-0 items-center justify-center">
            <Image src={logo} width={370} height={123} />
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
            <div className="flex justify-center font-mulish p-2">
              <div className="flex items-center mr-4">
                <input
                  id="alt_one"
                  type="radio"
                  value="private"
                  name="userType"
                  defaultChecked={true}
                  className="w-4 h-4 border-primary-color focus:ring-primary-color focus:ring-1"
                  onChange={(e) => {
                    setSelectedRadio(e.target.value);
                  }}
                />
                <label
                  htmlFor="inline-radio"
                  className="ml-2 text-md text-primary-color"
                >
                  Privatperson
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="alt_two"
                  type="radio"
                  value="company"
                  name="userType"
                  className="w-4 h-4 border-primary-color focus:ring-primary-color focus:ring-1"
                  onChange={(e) => {
                    setSelectedRadio(e.target.value);
                  }}
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ml-2 text-md text-primary-color"
                >
                  Företag
                </label>
              </div>
            </div>
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

CreateAccountView.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
