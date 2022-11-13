import { Divider } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Advertisement, User } from "../../util/models";
import Image from "next/image";
import axios from "axios";
import loadingPlaceholderImage from '../../public/gray.jpeg';
import { Timestamp } from "firebase/firestore";

interface AdViewProps {
  ad: Advertisement;
}



export default function AdView({ ad }: AdViewProps) {

  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState<User>(null);
  console.log(ad)
  useEffect(() => {
    if (!ad.creatorId) return
    axios.get(`/api/users/${ad.creatorId}`).then(res => {
      setLoadingUser(false);
      setUser(res.data);
      return;
    })

    setLoadingUser(false);
  }, []);

  //@ts-ignore

  return (
    <div className="flex flex-col bg-profile-sections md:w-full md:ml-2 lg:ml-2 shadow-md rounded-md mt-3 mb-10">
      {/*Ad presentation | bild och cover */}
      <div className="flex flex-col h-24 md:h-36 bg-gradient-to-r from-primary-color to-footer-pink rounded-t-md">
        <div className="flex items-center justify-center ml-8 rounded-full mt-4 md:mt-10 bg-white h-16 w-16 md:h-20 md:w-20">
          <div className="block bg-black bg-opacity-40 rounded-full w-18 h-18 items-center justify-center text-white overflow-hidden">
            <Image alt={'Logo'} src={(loadingUser || user == null) ? loadingPlaceholderImage : user.photoURL} layout="intrinsic" objectFit="cover" width="100%" height="100%" />
          </div>
        </div>
      </div>
      <div className="p-4">
        {/*Title, company, timesence */}
        <div className="flex flex-col mb-8">
          <p className="font-mulish font-semibold text-2xl mb-3 text-center">{ad.title}</p>
          <div className="flex flex-row items-center justify-evenly">
            <p className="font-mulish sm:text-md md:text-xl">{ad.company}</p>
            <p className="font-mulish font-bold ">.</p>
            <p className="font-mulish text-md xl:text-lg ">
              {
                //@ts-ignore
                moment.unix(ad.createdAt.seconds).fromNow()}
            </p>
          </div>
        </div>
        {/*Info ad */}
        <div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Vart behöver vi
            </p>
            <p className="font-mulish text-md">{ad.location}</p>
          </div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              När behöver vi
            </p>
            <div className="flex justify-evenly">
              <p className="font-mulish text-md">
                Från {moment(ad.period.start).format("YYYY-MM-DD")}
              </p>
              <p className="font-mulish text-md">
                Till {moment(ad.period.end).format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Hur många behöver vi
            </p>
            <p className="font-mulish text-md">{ad.amount}</p>
          </div>
        </div>
        <Divider variant="fullWidth" className="mb-4" />
        <div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Kollektivavtal
            </p>
            <p className="font-mulish text-md">
              {ad.collectiveAgreement ? "Ja" : "Nej"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Avtalsform
            </p>
            <p className="font-mulish text-md">{ad.contractForm}</p>
          </div>
          {!ad.collectiveAgreement && (
            <div className="mb-4">
              <p className="font-mulish font-semibold text-lg text-footer-pink">
                Typ av arbetskraft
              </p>
              <p className="font-mulish text-md">{ad.typeOfWork}</p>
            </div>
          )}
        </div>
        <Divider variant="fullWidth" className="mb-4" />
        <div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Beskrining
            </p>
            <p className="font-mulish text-md">{ad.description}</p>
          </div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Kravspecifikation
            </p>
            <p className="font-mulish text-md">{ad.requirements}</p>
          </div>
          {/*Contact info */}
          <Divider variant="fullWidth" className="mb-4" />
          <p className="font-mulish font-semibold mb-2 text-lg text-footer-pink">
            Kontaktuppgifter
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="font-mulish text-md">{ad.contact?.name}</p>
            <p className="font-mulish text-md font-semibold">
              {ad.contact?.phone}
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-mulish text-md">{ad.contact?.address}</p>
            <p className="font-mulish text-md">
              {ad.contact?.postCode}, {ad.contact?.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
