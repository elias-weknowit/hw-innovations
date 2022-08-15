import React, { useState } from "react";
import RadioButton from "./components/RadioButton";
import InputForm from "./components/InputForm";
import UploadImgForm from "./components/UploadImgForm";
import { Ad } from "../../shared/types";
import type { Advertisement } from "../../util/models";
import moment from "moment";

interface CreateAdFormProps {
  onSubmit: (ad: Advertisement) => void;
}

export default function CreateAdForm({ onSubmit }: CreateAdFormProps) {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputCompany, setInputCompany] = useState<string>("");
  const [inputLocation, setLocation] = useState<string>("");
  const [inputPeriod, setInputPeriod] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<string>("");
  const [inputContractForm, setInputContractForm] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [inputPhone, setInputPhone] = useState<string>("");
  const [inputAddress, setInputAddress] = useState<string>("");

  //Remove charactar input when submiting
  const handleinputCharactar = () => {
    setInputTitle("");
    setInputCompany("");
    setLocation("");
    setInputPeriod("");
    setInputAmount("");
    setInputContractForm("");
    setInputDescription("");
    setInputName("");
    setInputPhone("");
    setInputAddress("");
  };

  const onSubmitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    const ad: Advertisement = {
      type: "work",
      title: e.target[2].value,
      company: e.target[3].value,
      location: e.target[4].value,
      period: {
        start: moment(), //Should be date from form
      },
      amount: e.target[6].value,
      collectiveAgreement: false,
      contractForm: e.target[9].value,
      creatorId: "",
      description: e.target[11].value,
      requirements: [],
      contact: {
        name: e.target[13].value,
        phone: e.target[14].value,
        address: e.target[15].value,
      },
      createdAt: moment(),
      updatedAt: moment(),
    };
    onSubmit(ad);
    handleinputCharactar();
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
              name="workType"
              labels={["Jobb", "Arbetskraft"]}
              title="Erbjuder"
              onChange={(label) => {}}
            />
            <InputForm
              labelName="Rubrik"
              type
              date="text"
              value={inputTitle}
              onChange={(e) => {
                setInputTitle(e.target.value);
              }}
            />
            <InputForm
              labelName="Företag"
              type
              date="text"
              value={inputCompany}
              onChange={(e) => {
                setInputCompany(e.target.value);
              }}
            />
            <InputForm
              labelName="Plats"
              type
              date="text"
              value={inputLocation}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />

            <InputForm
              labelName="Period"
              type
              date="date"
              value={inputPeriod}
              onChange={(e) => {
                setInputPeriod(e.target.value);
              }}
            />
            <InputForm
              labelName="Antal personer"
              type
              date="text"
              value={inputAmount}
              onChange={(e) => {
                setInputAmount(e.target.value);
              }}
            />
            <RadioButton
              title="Ansluten till kollektivavtal"
              name="collectiveAgreement"
              labels={["Ja", "Nej"]}
              onChange={(label) => {}}
            />
            <InputForm
              labelName="Avtalsform"
              type
              date="text"
              value={inputContractForm}
              onChange={(e) => {
                setInputContractForm(e.target.value);
              }}
            />
            <InputForm
              labelName="Typ av arbetskraft"
              type
              date="text"
              value={""}
              onChange={() => {}}
            />
            <InputForm
              labelName="Beskrivning"
              date="text"
              value={inputDescription}
              onChange={(e) => {
                setInputDescription(e.target.value);
              }}
            />
            <InputForm
              labelName="Kvalifikationer"
              date="text"
              value={""}
              onChange={() => {}}
            />
            <InputForm
              labelName="Kontaktperson"
              type
              date="text"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
              }}
            />
            <InputForm
              labelName="Telefonnummer"
              type
              date="text"
              value={inputPhone}
              onChange={(e) => {
                setInputPhone(e.target.value);
              }}
            />
            <InputForm
              labelName="Adress"
              type
              date="text"
              value={inputAddress}
              onChange={(e) => {
                setInputAddress(e.target.value);
              }}
            />
            <UploadImgForm className="shadow-sm p-1 md:p-2 rounded-md font-mulish w-1/2" />
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
