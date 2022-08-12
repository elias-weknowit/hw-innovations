import React from "react";
import Head from "next/head";
import CreateAdForm from "../../components/Create-Ad/CreateAdForm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import EditAd from "../../components/Create-Ad/EditAd";

export default function editAd() {
  const router = useRouter();

  const goBack = (e) => {
    e.preventDefault();
    router.push("/ad");
  };

  return (
    <>
      <div className="px-8 sm:px-12 md:px-16 lg:px-32">
        <Head>
          <title>H&W Innovations | Redigera annons</title>
        </Head>

        <div className="mt-32 md:mt-20">
          <div className="flex flex-col">
            <div
              className="flex justify-start items-start md:hidden lg:hidden"
              onClick={goBack}
            >
              <ArrowBackIcon className="w-7 h-7" />
            </div>
            <EditAd />
          </div>
        </div>
      </div>
    </>
  );
}
