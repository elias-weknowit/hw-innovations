import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import AdDetails from "../components/Create-Ad/AdDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAuth } from "../components/firebase/AuthUserProvider";
import logo from "../public/Logo.svg";
import CreateAdForm from "../components/Create-Ad/CreateAdForm";
import Navbar from "../components/Navbar/Navbar";
import EditAd from "../components/Create-Ad/EditAd";
import { Advertisement } from "../util/models";
import axios from "axios";
import AdView from "../components/Create-Ad/AdView";

export default function AdPage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [ads, setAds] = useState<Advertisement[]>([]);

  useEffect(() => {
    if (user) {
      console.log(user);
      fetch("http://localhost:3000/api/advertisements?userId=" + user.uid)
        .then((res) => res.json())
        .then((data) => {
          setAds(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <>
      <Navbar hideButton />
      <div className="px-8 sm:px-12 md:px-16 lg:px-32">
        <Head>
          <title>H&W Innovations | Mina annons</title>
        </Head>

        <div className="mt-32 md:mt-20">
          {isEditing ? (
            <EditAd />
          ) : (
            <>
              {" "}
              <div className="flex flex-col md:items-center md:flex-row md:justify-between lg:flex-row lg:justify-between lg:items-center">
                <p className="font-mulish mb-2 text-3xl font-semibold">
                  Mina annonser
                </p>
                <div className="text-white font-mulish font-semibold text-lg md:mr-5 md:hidden lg:hidden">
                  <div className="bg-primary-color p-1 w-1/2 md:p-2 rounded-md ">
                    <button className="flex flex-row items-center">
                      <AddCircleIcon className="w-5 h-5 mr-1" />
                      <Link href={"/ad/create"}>Skapa annons </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="mb-4 w-full md:w-1/2 lg:w-1/3">
                  <div className="">
                    {ads.map((ad) => (
                      <AdDetails
                        key={ad.id}
                        image={user?.photoURL ? user.photoURL : logo}
                        onEdit={() => setIsEditing(true)}
                        ad={ad}
                        onClick={null}
                      />
                    ))}
                  </div>
                </div>
                <div className="md:w-full lg:w-full hidden md:block lg:block ">
                  {isEditing ? (
                    <EditAd />
                  ) : (
                    <CreateAdForm
                      onSubmit={(ad) => {
                        const _ad = { ...ad, creatorId: user.uid };
                        setAds((prev) => [...prev, _ad]);
                        axios.post("/api/advertisements", _ad);
                      }}
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

AdPage.getLayout = function getLayout(page: ReactElement) {
  return page;
};
