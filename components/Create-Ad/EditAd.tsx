import React from "react";
import RadioButton from "./components/RadioButton";
import InputForm from "./components/InputForm";
import UploadImgForm from "./components/UploadImgForm";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useRouter } from "next/router";

export default function EditAd() {
  const router = useRouter();

  const goBack = (e) => {
    e.preventDefault();
    router.push("#");
  };

  return (
    <>
      <div className="flex flex-col bg-profile-sections md:w-full md:ml-2 lg:ml-2 shadow-md rounded-3xl p-4 mt-3 mb-10">
        {/*<div
          className="flex justify-start items-start md:hidden lg:hidden"
          onClick={goBack}
        >
          <ArrowBackIcon className="w-7 h-7" />
        </div>*/}
        {/**Tile */}
        <div className="flex flex-col justify-start mb-6">
          <p className="mt-4 text-3xl md:text-xl lg:text-xl font-mulish font-semibold">
            Redigera annons
          </p>
        </div>
        <div>
          <form>
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
            <div className="flex flex-row items-center justify-between mt-14">
              <div className="">
                <button className="flex items-center">
                  <DeleteIcon
                    className="h-5 w-5"
                    style={{ color: "#EB363D" }}
                  />
                  <p className="font-mulish font-semibold text-secondary-color">
                    Ta bort annons
                  </p>
                </button>
              </div>
              <div>
                <button className="bg-primary-color p-1 rounded-md">
                  <div className="font-mulish font-semibold text-white mx-10">
                    <Link href={""}>Spara</Link>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}