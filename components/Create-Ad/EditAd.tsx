import React, { useEffect } from "react";
import RadioButton from "./components/RadioButton";
import InputForm from "./components/InputForm";
import UploadImgForm from "./components/UploadImgForm";
import DeleteIcon from "@mui/icons-material/Delete";

import { Advertisement } from "../../util/models";
import { useState } from "react";

import { useAuth } from "../firebase/AuthUserProvider";
import axios from "axios";

export default function EditAd({
  ad,
  onSubmit,
  onDelete
}: {
  ad: Advertisement;
  onSubmit: (ad: Advertisement) => void;
  onDelete: (ad: Advertisement) => void;
}) {
  //const { user } = useAuth();
  const [adData, setAdData] = useState({ ...ad });

  /** 
  const handlingDelete = () => {
    console.log(ad.id);
    if (user) {
      let query = `/api/advertisements/${ad.id}`;
      axios
        .delete(query)
        .then((res) => {
          console.log("Deleted");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };*/
  return (
    <>
      <div className="flex flex-col bg-profile-sections md:w-full md:ml-2 lg:ml-2 shadow-md rounded-3xl p-4 mt-3 mb-10">
        {/**Tile */}
        <div className="flex flex-col justify-start mb-6">
          <p className="mt-4 text-3xl md:text-xl lg:text-xl font-mulish font-semibold">
            Redigera annons
          </p>
        </div>
        <div>
          <form>
            <RadioButton
              name="workType"
              labels={["Jobb", "Arbetskraft"]}
              title="Erbjuder"
              onChange={(label) => {}}
            />
            <InputForm
              labelName="Rubrik"
              sort
              type="text"
              value={adData.title}
              onChange={(e) => setAdData({ ...adData, title: e.target.value })}
            />
            <InputForm
              labelName="Företag"
              sort
              type="text"
              value={adData.company}
              onChange={(e) =>
                setAdData({ ...adData, company: e.target.value })
              }
            />
            <InputForm
              labelName="Plats"
              sort
              type="text"
              value={adData.location}
              onChange={(e) =>
                setAdData({ ...adData, location: e.target.value })
              }
            />
            <div className="flex flex-col md:flex-row justify-evenly">
              <InputForm
                labelName="Period - Start"
                sort
                type="date"
                value={""}
                //value={adData.period.start.format("YYY-MM-DD")}
                onChange={
                  () => {} /*(e) =>
                setAdData({
                  ...adData,
                  period: { ...adData.period, start: moment(e.target.value) },
                })*/
                }
              />
              <InputForm
                labelName="Period - Slut"
                sort
                type="date"
                value={""}
                //value={adData.period.start.format("YYY-MM-DD")}
                onChange={
                  () => {} /*(e) =>
                setAdData({
                  ...adData,
                  period: { ...adData.period, start: moment(e.target.value) },
                })*/
                }
              />
            </div>

            <InputForm
              labelName="Antal personer"
              sort
              type="text"
              value={adData.amount.toString()}
              onChange={(e) =>
                setAdData({ ...adData, amount: parseInt(e.target.value) })
              }
            />
            <RadioButton
              title="Ansluten till kollektivavtal"
              name="collectiveAgreement"
              labels={["Ja", "Nej"]}
              onChange={(label) => {}}
            />
            <InputForm
              labelName="Avtalsform"
              sort
              type="text"
              value={adData.contractForm}
              onChange={(e) =>
                setAdData({ ...adData, contractForm: e.target.value })
              }
            />
            <InputForm
              labelName="Typ av arbetskraft"
              sort
              type="text"
              value={adData.typeOfWork}
              onChange={(e) =>
                setAdData({ ...adData, typeOfWork: e.target.value })
              }
            />
            <InputForm
              labelName="Beskrivning"
              type="text"
              value={adData.description}
              onChange={(e) =>
                setAdData({ ...adData, description: e.target.value })
              }
            />
            <InputForm
              labelName="Kvalifikationer"
              type="text"
              value={adData.requirements}
              //.join("\n")
              onChange={
                (e) => setAdData({ ...adData, requirements: e.target.value }) //e.target.value.split("\n")
              }
            />
            <InputForm
              labelName="Kontaktperson"
              sort
              type="text"
              value={adData.contact.name}
              onChange={(e) =>
                setAdData({
                  ...adData,
                  contact: { ...adData.contact, name: e.target.value },
                })
              }
            />
            <InputForm
              labelName="Telefonnummer"
              sort
              type="text"
              value={adData.contact.phone}
              onChange={(e) =>
                setAdData({
                  ...adData,
                  contact: { ...adData.contact, phone: e.target.value },
                })
              }
            />
            <InputForm
              labelName="Adress"
              sort
              type="text"
              value={adData.contact.address}
              onChange={(e) =>
                setAdData({
                  ...adData,
                  contact: { ...adData.contact, address: e.target.value },
                })
              }
            />
            <InputForm
              labelName="Stad"
              sort
              type="text"
              value={adData.contact.city}
              onChange={(e) =>
                setAdData({
                  ...adData,
                  contact: { ...adData.contact, city: e.target.value },
                })
              }
            />
            <InputForm
              labelName="Post nr."
              sort
              type="text"
              value={adData.contact.postCode}
              onChange={(e) =>
                setAdData({
                  ...adData,
                  contact: { ...adData.contact, postCode: e.target.value },
                })
              }
            />
            <UploadImgForm className="shadow-sm p-1 md:p-2 rounded-md font-mulish w-1/2" />
            <div className="flex flex-row items-center justify-between mt-14">
              <div className="">
                <button className="flex items-center" onClick={() => onDelete(ad)}>
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
                  <div
                    className="font-mulish font-semibold text-white mx-10"
                    onClick={() => onSubmit(adData)}
                  >
                    Spara
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
