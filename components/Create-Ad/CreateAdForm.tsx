import React from "react";
import RadioButton from "./components/RadioButton";
import InputForm from "./components/InputForm";
import UploadImgForm from "./components/UploadImgForm";

export default function CreateAdForm() {
  return (
    <>
      <div className="flex flex-col bg-profile-sections sm:w-1/2 md:w-1/2 lg:w-1/2 shadow-md rounded-3xl p-4 mt-3 mb-10">
        {/**Tile */}
        <div className="flex flex-col justify-start mb-6">
          <p className="mt-4 text-3xl md:text-xl lg:text-xl font-mulish font-semibold">
            Skapa annons
          </p>
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
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
                <p className="font-mulish font-semibold text-white mx-6">
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
