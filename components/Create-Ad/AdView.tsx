import { Divider } from "@mui/material";
import moment from "moment";
import React from "react";
import { Advertisement } from "../../util/models";

interface AdViewProps {
  ad: Advertisement;
}

export default function AdView({ ad }: AdViewProps) {
  return (
    <div className="flex flex-col bg-profile-sections md:w-full md:ml-2 lg:ml-2 shadow-md rounded-md mt-3 mb-10">
      {/*Ad presentation | bild och cover */}
      <div className="flex flex-col h-24 md:h-36 bg-gradient-to-r from-primary-color to-footer-pink rounded-t-md">
        <div className="flex items-center justify-center ml-8 rounded-full mt-4 md:mt-10 bg-white h-16 w-16 md:h-20 md:w-20">
          <div className="items-center font-semibold justify-center">Bild</div>
        </div>
      </div>
      <div className="p-4">
        {/*Title, company, timesence */}
        <div className="flex flex-col mb-8">
          <p className="font-mulish font-semibold text-xl mb-3">{ad.title}</p>
          <div className="flex flex-row items-center justify-evenly">
            <p className="font-mulish sm:text-md md:text-xl">{ad.company}</p>
            <p className="font-mulish font-bold ">.</p>
            <p className="font-mulish sm:text-md md:text-xl ">
              {" "}
              {moment(ad.updatedAt).fromNow()}
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
              {ad.collectiveAgreement.valueOf()} Error: Hårdkodad.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Avtalsform
            </p>
            <p className="font-mulish text-md">{ad.contractForm}</p>
          </div>
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
            <p className="font-mulish text-md">{ad.contact.name}</p>
            <p className="font-mulish text-md font-semibold">
              {ad.contact.phone}
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-mulish text-md">{ad.contact.address}</p>
            <p className="font-mulish text-md">
              {ad.contact.postCode}, {ad.contact.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
