import React, { useState } from "react";
import RadioButton from "./components/RadioButton";
import InputForm from "./components/InputForm";
import UploadImgForm from "./components/UploadImgForm";
import type { Advertisement } from "../../util/models";
import moment from "moment";

interface CreateAdFormProps {
  onSubmit: (ad: Advertisement) => void;
  typeOfWork?: boolean;
}

export default function CreateAdForm({ onSubmit }: CreateAdFormProps) {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputCompany, setInputCompany] = useState<string>("");
  const [inputLocation, setLocation] = useState<string>("");
  const [inputPeriodStart, setInputPeriodStart] = useState<string>("");
  const [inputPeriodEnd, setInputPeriodEnd] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<string>("");
  const [inputContractForm, setInputContractForm] = useState<string>("");
  const [inputTypeOfWork, setInputTypeOfWork] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");
  const [inputRequirements, setInputRequirements] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [inputPhone, setInputPhone] = useState<string>("");
  const [inputAddress, setInputAddress] = useState<string>("");
  const [inputCity, setInputCity] = useState<string>("");
  const [inputPostcode, setInputPostCode] = useState<string>("");

  const [selectedRadio, setSelectedRadio] = useState<string>("labour");
  const [selectedRadio2, setSelectedRadio2] = useState<string>();

  //Remove charactar input when submiting
  const handleinputCharactar = () => {
    setInputTitle("");
    setInputCompany("");
    setLocation("");
    setInputPeriodStart("");
    setInputPeriodEnd("");
    setInputAmount("");
    setInputContractForm("");
    setInputTypeOfWork("");
    setInputDescription("");
    setInputName("");
    setInputPhone("");
    setInputAddress("");
    setInputCity("");
    setInputPostCode("");
    setInputRequirements("");
  };



  const onSubmitHandler = (e) => {
    console.log(e);
    e.preventDefault();

    const ad: Advertisement = {
      type: selectedRadio,
      title: e.target[2].value,
      company: e.target[3].value,
      location: e.target[4].value,
      period: {
        start: e.target[5].value, //Should be date from form
        end: e.target[6].value,
      },
      amount: e.target[7].value,
      collectiveAgreement: e.target[8].checked,
      contractForm: e.target[10].value,
      typeOfWork: e.target[11].value,
      description: e.target[12].value,
      requirements: e.target[13].value,
      contact: {
        name: e.target[14].value,
        phone: e.target[15].value,
        address: e.target[16].value,
        city: e.target[17].value,
        postCode: e.target[18].value,
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
              title="Erbjuder"
              name="type"
              labels={["Jobb", "Arbetskraft"]}
              onChange={(e) => {
                setSelectedRadio(e.target.value == "Arbetskraft" ? "labour" : "work");
              }}
            />
            <InputForm
              labelName="Rubrik"
              sort
              type="text"
              value={inputTitle}
              onChange={(e) => {
                setInputTitle(e.target.value);
              }}
            />
            <InputForm
              labelName="Företag"
              sort
              type="text"
              value={inputCompany}
              onChange={(e) => {
                setInputCompany(e.target.value);
              }}
            />
            <InputForm
              labelName="Plats"
              sort
              type="text"
              value={inputLocation}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <div className="flex flex-col md:flex-row justify-evenly">
              <InputForm
                labelName="Period - Start"
                sort
                type="date"
                value={inputPeriodStart}
                onChange={(e) => {
                  setInputPeriodStart(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <InputForm
                labelName="Period - Slut"
                sort
                type="date"
                value={inputPeriodEnd}
                onChange={(e) => {
                  setInputPeriodEnd(e.target.value);
                  console.log(e.target.value)
                }}
              />
            </div>
            <InputForm
              labelName="Antal personer"
              sort
              type="text"
              value={inputAmount}
              onChange={(e) => {
                setInputAmount(e.target.value);
              }}
            />
            <RadioButton
              title="Ansluten till kollektivavtal"
              name="collectiveAgreement"
              labels={["Ja", "Nej"]}
              onChange={(e) => {
                setSelectedRadio2(e.target.value);
                console.log(e.target.value);
              }}
            />
            <InputForm
              labelName="Avtalsform"
              sort
              type="text"
              value={inputContractForm}
              onChange={(e) => {
                setInputContractForm(e.target.value);
              }}
            />
            {selectedRadio === "Jobb" ? (
              <div className="hidden">
                <InputForm
                  labelName="Typ av arbetskraft"
                  sort
                  type="text"
                  value={inputTypeOfWork}
                  onChange={(e) => {
                    setInputTypeOfWork(e.target.value);
                    console.log(e.target.checked);
                  }}
                />
              </div>
            ) : (
              <InputForm
                labelName="Typ av arbetskraft"
                sort
                type="text"
                value={inputTypeOfWork}
                onChange={(e) => {
                  setInputTypeOfWork(e.target.value);
                  console.log(e.target.checked);
                }}
              />
            )}

            <InputForm
              labelName="Beskrivning"
              type="text"
              value={inputDescription}
              onChange={(e) => {
                setInputDescription(e.target.value);
              }}
            />
            <InputForm
              labelName="Kvalifikationer"
              type="text"
              value={inputRequirements}
              onChange={(e) => {
                setInputRequirements(e.target.value);
              }}
            />
            <InputForm
              labelName="Kontaktperson"
              sort
              type="text"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
              }}
            />
            <InputForm
              labelName="Telefonnummer"
              sort
              type="text"
              value={inputPhone}
              onChange={(e) => {
                setInputPhone(e.target.value);
              }}
            />
            <InputForm
              labelName="Adress"
              sort
              type="text"
              value={inputAddress}
              onChange={(e) => {
                setInputAddress(e.target.value);
              }}
            />
            <InputForm
              labelName="Stad"
              sort
              type="text"
              value={inputCity}
              onChange={(e) => {
                setInputCity(e.target.value);
              }}
            />
            <InputForm
              labelName="Post nr."
              sort
              type="text"
              value={inputPostcode}
              onChange={(e) => {
                setInputPostCode(e.target.value);
              }}
            />
            <UploadImgForm handleSubmit={null} />
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
