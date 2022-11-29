import Head from "next/head";
import { ReactElement } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Work 2 Do | Välkommen</title>
      </Head>

      <div className="flex flex-col bg-[url('/landingPage.png')] object-contain md:object-scale-down bg-fixed bg-cover min-h-screen">
        <Navbar transparent />
        <div className="md:mx-32 mt-40 md:mt-40 flex flex-cols">
          <div className="md:w-full lg:w-full xl:w-1/2 2xl:w-1/3">
            <p className="text-5xl items-center  text-center md:text-start font-mulish md:text-6xl text-white">
              Erbjud och hitta arbetskraft här
            </p>
            <p className="font-mulish text-xl mt-12 mb-12 text-center md:text-start text-white">
              Vi vill passa ihop rätt förmåga med rätt
              arbetsgivare så att det passar båda
              parter i både tid, kunskaper och plats.
            </p>
            <div className="flex flex-row items-center justify-center md:justify-start">
              <button
                className="rounded-full bg-primary-color p-2 md:p-3 m-2 w-1/3 text-white hover:text-black hover:bg-primary-color-hover"
                onClick={() => router.push("/job?type=labour")}>
                <p className="font-mulish text-md">
                  Sök arbetskraft
                </p>
              </button>
              <button
                className="rounded-full bg-secondary-color p-2 md:p-3 m-2 w-1/3 text-white hover:text-black hover:bg-secondary-color-hover"
                onClick={() => router.push("/job")}>
                <p className="font-mulish text-md">
                  Sök jobb
                </p>
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return page;
};
