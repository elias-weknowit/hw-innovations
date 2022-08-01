import Head from "next/head";
import { ReactElement } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>H&W Innovations | Välkommen</title>
      </Head>

      <div className="flex flex-col bg-homeScreen-landingPage bg-fixed bg-cover min-h-screen">
        <Navbar transparent />
        <div className="md:mx-32 md:mt-40 flex flex-cols">
          <div className="w-1/3">
            <p className="font-mulish text-6xl text-white">
              Erbjud och hitta arbetskraft här
            </p>
            <p className="font-mulish tex-lg mt-12 mb-12 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="flex flex-row items-center">
              <button className="rounded-full bg-primary-color p-3 m-2 w-1/3">
                <p className="font-mulish text-md text-white">
                  Sök arbetskraft
                </p>
              </button>
              <button className="rounded-full bg-secondary-color p-3 m-2 w-1/3">
                <p className="font-mulish text-md text-white">Sök jobb</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return page;
};
