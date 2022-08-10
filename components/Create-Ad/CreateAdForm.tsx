import React from "react";
import RadioButton from "./components/RadioButton";
import InputForm from "./components/InputForm";
import UploadImgForm from "./components/UploadImgForm";
import { Ad } from "../../shared/types";

interface CreateAdFormProps {
  onSubmit: (Ad) => void;
}

export default function CreateAdForm({ onSubmit }: CreateAdFormProps) {
  const onSubmitForm = (e) => {
    console.log(e);
    e.preventDefault();
    const ad = {
      image: "path",
      companyTitle: e.target[3].value,
      workTitle: e.target[2].value,
      timeSinceAdded: "30",
      amountOf: e.target[7].value,
      date: "25 aug",
      location: e.target[4].value,
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
          <form onSubmit={onSubmitForm}>
            <RadioButton />
            <InputForm
              labelName="Jobbtitel"
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
              labelName="När"
              type
              date="date"
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
              labelName="Antal"
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
            <UploadImgForm />
            <div className="flex flex-row items-center justify-end mt-14">
              <button
                className="bg-primary-color p-1 rounded-md"
                onClick={() => {
                  console.log("hej");
                }}
              >
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
