import { Divider } from "@mui/material";
import React from "react";
import RadioButton from "../Create-Ad/components/RadioButton";
import CheckBox from "./CheckBox";
import Date from "./Date";

export default function FilterView() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <RadioButton
          name="adDate"
          labels={["Nyligen", "Förra vecka", "Förra månaden", "När som helst"]}
          title="Uppläggningsdatum"
          onChange={(label) => { }}
        />
      </div>
      <Divider variant="middle" />
      <div className="mt-2 mb-4">
        <p className="font-mulish font-semibold">Jobba om</p>
        <Date title={["Nu", "1v", "2v", "3v"]} onChange={(title) => { }} />
      </div>
      <Divider variant="middle" />
      <div className="flex flex-col mt-2">
        <p className="font-mulish font-semibold">Plats</p>
        <input type="text" placeholder="t.ex Stockholm" className="border border-gray-300 rounded-md p-2 w-5/6 w-max-10 ml-4 my-2" />
      </div>
      <Divider variant="middle" />
      <div className="flex flex-row items-center justify-evenly mt-5">
        <button className="p-2">
          <p className="font-mulish text-primary-color font-semibold hover:opacity-80 ">
            Återställ
          </p>
        </button>
        <button className="bg-secondary-color hover:bg-secondary-color-hover text-white p-2 rounded-lg lg:mx-4">
          <p className="font-mulish font-semibold mx-2">
            Visa resultat
          </p>
        </button>
      </div>
    </div>
  );
}
