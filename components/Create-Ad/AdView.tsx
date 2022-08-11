import { Divider } from "@mui/material";
import React from "react";

export default function AdView() {
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
          <p className="font-mulish font-semibold text-xl mb-3">
            Driftingenjör Styr Driftingenjör Styr Driftingenjör Styr
          </p>
          <div className="flex flex-row items-center justify-evenly">
            <p className="font-mulish">Företag AB</p>
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
            <p className="font-mulish text-md">Stockholm, Slussen</p>
          </div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              När behöver vi
            </p>
            <p className="font-mulish text-md">25 aug - </p>
          </div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Hur många vi behöver
            </p>
            <p className="font-mulish text-md">3 st</p>
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
            <p className="font-mulish text-md">Anställning</p>
          </div>
        </div>
        <Divider variant="fullWidth" className="mb-4" />
        <div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Beskrining
            </p>
            <p className="font-mulish text-md">
              AnstäLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.llning
            </p>
          </div>
          <div className="mb-4">
            <p className="font-mulish font-semibold text-lg text-footer-pink">
              Kravspecifikation
            </p>
            <p className="font-mulish text-md">
              AnstälLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.lning
            </p>
          </div>
          {/*Contact info */}
          <p className="font-mulish font-semibold mb-2 text-lg text-footer-pink">
            Kontaktuppgifter
          </p>
          <Divider variant="fullWidth" className="mb-4" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="font-mulish text-md">Linda Nilsson</p>
            <p className="font-mulish text-md font-semibold">+46793423409</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-mulish text-md">Vägen 11</p>
            <p className="font-mulish text-md">70584 Visby</p>
          </div>
        </div>
      </div>
    </div>
  );
}
