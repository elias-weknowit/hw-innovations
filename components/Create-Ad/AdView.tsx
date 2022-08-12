import { Divider } from "@mui/material";
import React from "react";
import { Advertisement } from "../../util/models";

interface AdViewProps {
  ad: Advertisement;
}

export default function AdView({ ad }: AdViewProps) {
  return (
    <div className="flex flex-col bg-profile-sections md:w-full md:ml-2 lg:ml-2 shadow-md rounded-md mt-3 mb-10">
      {/*Ad presentation | bild och cover */}
      <div className="flex flex-col h-24 md:h-36 bg-primary-color rounded-t-md">
        <div className="flex ml-8 rounded-full bg-white h-16 w-16">
          <div className="items-center justify-center">sd</div>
        </div>
      </div>
      <div className="p-4">
        {/*Title, company, timesence */}
        <div className="flex flex-col mb-8">
          <p className="font-mulish font-semibold text-xl mb-3">{ad.title}</p>
          <div className="flex flex-row items-center justify-evenly">
            <p className="font-mulish">{ad.company}</p>
            <p className="font-mulish font-bold">.</p>
            <p className="font-mulish">3 dagar sedan</p>
          </div>
        </div>
        {/*Info ad */}
        <div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Vart vi behöver
            </p>
            <p className="font-mulish text-md">{ad.location}</p>
          </div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              När behöver vi
            </p>
            <p className="font-mulish text-md">21 aug - </p>
          </div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Hur många vi behöver
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
            <p className="font-mulish text-md">Ja</p>
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
          <p className="font-mulish font-semibold mb-2 text-lg text-footer-pink">
            Kontaktuppgifter
          </p>
          <Divider variant="fullWidth" className="mb-4" />
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
            <p className="font-mulish text-md">70584 Visby</p>
          </div>
        </div>
      </div>
    </div>
  );
}
