import React from "react";
import RadioButton from "./components/RadioButton";
import InputForm from "./components/InputForm";
import UploadImgForm from "./components/UploadImgForm";
import { Ad } from "../../shared/types";
import type { Advertisement } from "../../util/models";
import moment from "moment";

interface CreateAdFormProps {
  onSubmit: (Advertisement) => void;
}

export default function CreateAdForm({ onSubmit }: CreateAdFormProps) {
  const onSubmitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    const ad: Advertisement = {
      company: e.target[3].value,
      title: e.target[2].value,
      amount: e.target[7].value,
      period: {
        start: moment().subtract(10, "minutes").subtract(2, "hours"),
      },
      location: e.target[4].value,
      creatorId: "",
      description: e.target[5].value,
      type: "work",
      collectiveAgreement: false,
      contractForm: "",
      requirements: [],
      contact: {
        name: "Hård Kodad",
      },
      createdAt: moment(),
      updatedAt: moment(),
    };
    onSubmit(ad);
  };

  return (
    <>
      <div className="flex flex-col bg-profile-sections md:w-full md:ml-2 lg:ml-2 shadow-md rounded-md p-4 mt-3 mb-10">
        {/**Tile */}
        <div className="flex flex-col justify-start mb-6 ">
          <p className="mt-4 text-3xl md:text-xl lg:text-xl font-mulish font-semibold">
            Skapa annons
          </p>
        </div>
        <div>
          <form onSubmit={onSubmitHandler}>
            <RadioButton
              title="Erbjuder"
              alt_one="Jobb"
              alt_two="Arbetskraft"
            />
            <InputForm
              labelName="Rubrik"
              type
              date="text"
              value={null}
              onChange={null}
            />
            <InputForm
              labelName="Företag"
              type
              date="text"
              value={null}
              onChange={null}
            />
            <InputForm
              labelName="Plats"
              type
              date="text"
              value={null}
              onChange={null}
            />

            <InputForm
              labelName="Period"
              type
              date="date"
              value={null}
              onChange={null}
            />
            <InputForm
              labelName="Antal personer"
              type
              date="text"
              value={null}
              onChange={null}
            />
            <RadioButton
              title="Ansluten till kollektivavtal"
              alt_one="Jobb"
              alt_two="Arbetskraft"
            />
            <InputForm
              labelName="Avtalsform"
              type
              date="text"
              value={null}
              onChange={null}
            />
            <InputForm
              labelName="Typ av arbetskraft"
              type
              date="text"
              value={null}
              onChange={null}
            />
            <InputForm
              labelName="Beskrivning"
              date="text"
              value={null}
              onChange={null}
            />
            <InputForm
              labelName="Kvalifikationer"
              date="text"
              value={null}
              onChange={null}
            />
            <InputForm
              labelName="Antal personer"
              type
              date="text"
              value={null}
              onChange={null}
            />
            <InputForm
              labelName="Antal personer"
              type
              date="text"
              value={null}
              onChange={null}
            />
            <InputForm
              labelName="Antal personer"
              type
              date="text"
              value={null}
              onChange={null}
            />
            <UploadImgForm />
            <div className="flex flex-row items-center justify-end mt-14">
              <button className="bg-primary-color p-1 rounded-md">
                <p className="font-mulish font-semibold text-white mx-10">
                  Publicera
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
