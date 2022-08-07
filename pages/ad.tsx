import React from "react";
import Head from "next/head";
import Link from "next/link";
import AdDetails from "../components/Create-Ad/AdDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAuth } from "../components/firebase/AuthUserProvider";
import logo from "../public/Logo.svg";
import CreateAdForm from "../components/Create-Ad/CreateAdForm";

export default function ad() {
  const { user } = useAuth();
  return (
    <div className="px-8 sm:px-12 md:px-16 lg:px-32">
      <Head>
        <title>H&W Innovations | Mina annons</title>
      </Head>
      <div className="mt-32 md:mt-20">
        <div className="flex flex-col md:items-center md:flex-row md:justify-between lg:flex-row lg:justify-between lg:items-center">
          <p className="font-mulish mb-2 text-2xl font-semibold">
            Mina annonser
          </p>
          <div className="text-white font-mulish font-semibold text-lg  md:mr-5">
            <div className="bg-primary-color p-1 md:p-2 rounded-md ">
              <button className="flex flex-row items-center">
                <AddCircleIcon className="w-6 h-6 mr-2" />
                <Link href={"/create-ad"}>Skapa annons </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <AdDetails image={user?.photoURL ? user.photoURL : logo} />
        </div>
      </div>
    </div>
  );
}
