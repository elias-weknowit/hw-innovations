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
        <input type="text" placeholder="t.ex Stockholm" className="border border-gray-300 rounded-md p-2" />
      </div>
      <Divider variant="middle" />
      <div className="flex flex-row items-center justify-evenly mt-5">
        <button className="p-2">
          <p className="font-mulish text-primary-color font-semibold">
            Återställ
          </p>
        </button>
        <button className="bg-secondary-color p-2 rounded-lg lg:mx-4">
          <p className="font-mulish text-white font-semibold mx-2">
            Visa resultat
          </p>
        </button>
      </div>
    </div>
  );
}
