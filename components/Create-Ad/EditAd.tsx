import React from "react";
import RadioButton from "./components/RadioButton";
import InputForm from "./components/InputForm";
import UploadImgForm from "./components/UploadImgForm";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useRouter } from "next/router";
import { Advertisement } from "../../util/models";
import { useState } from "react";
import moment from "moment";

export default function EditAd({
  ad,
  onSubmit,
  onDelete,
}: {
  ad: Advertisement;
  onSubmit: (ad: Advertisement) => void;
  onDelete: () => void;
}) {
  const router = useRouter();
  const [adData, setAdData] = useState({ ...ad });

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
              type
              date="text"
              value={adData.title}
              onChange={(e) => setAdData({ ...adData, title: e.target.value })}
            />
            <InputForm
              labelName="Företag"
              type
              date="text"
              value={adData.company}
              onChange={(e) =>
                setAdData({ ...adData, company: e.target.value })
              }
            />
            <InputForm
              labelName="Plats"
              type
              date="text"
              value={adData.location}
              onChange={(e) =>
                setAdData({ ...adData, location: e.target.value })
              }
            />
            <InputForm
              labelName="Period"
              type
              date="date"
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
              labelName="Antal personer"
              type
              date="text"
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
              type
              date="text"
              value={adData.contractForm}
              onChange={(e) =>
                setAdData({ ...adData, contractForm: e.target.value })
              }
            />
            <InputForm
              labelName="Typ av arbetskraft"
              type
              date="text"
              value={adData.typeOfWork}
              onChange={(e) =>
                setAdData({ ...adData, typeOfWork: e.target.value })
              }
            />
            <InputForm
              labelName="Beskrivning"
              date="text"
              value={adData.description}
              onChange={(e) =>
                setAdData({ ...adData, description: e.target.value })
              }
            />
            <InputForm
              labelName="Kvalifikationer"
              date="text"
              value={adData.requirements} //.join("\n")
              onChange={
                (e) => setAdData({ ...adData, requirements: e.target.value }) //e.target.value.split("\n")
              }
            />
            <InputForm
              labelName="Kontaktperson"
              type
              date="text"
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
              type
              date="text"
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
              type
              date="text"
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
              type
              date="text"
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
              type
              date="text"
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
                <button className="flex items-center" onClick={onDelete}>
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
