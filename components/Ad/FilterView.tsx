import { Divider } from "@mui/material";
import moment from "moment";
import React from "react";
import RadioButton from "../Create-Ad/components/RadioButton";
import CheckBox from "./CheckBox";
import Date from "./Date";
import { Timestamp } from "firebase/firestore";

export type FilterValues = {
  startDate: Timestamp | string | Number;
  uploadDate: Timestamp | string | Number;
  location: string;
};

export default function FilterView({ onSubmit }: { onSubmit: (values: FilterValues) => void }) {
  const [filterValues, setFilterValues] = React.useState<FilterValues>({
    startDate: "",
    uploadDate: "",
    location: "",
  });

  React.useEffect(() => {
    //convert to startDate to current moment and add week(s) depending on label
    if (filterValues.startDate == 1) {
      console.log("1v");
      filterValues.startDate = Timestamp.fromDate(moment().add(1, "week").toDate());
    } else if (filterValues.startDate == 2) {
      console.log("2v");
      filterValues.startDate = Timestamp.fromDate(moment().add(2, "week").toDate());
    } else if (filterValues.startDate == 3) {
      console.log("3v");
      filterValues.startDate = Timestamp.fromDate(moment().add(3, "week").toDate());
    } else if (filterValues.startDate == 0) {
      console.log("Nu");
      filterValues.startDate = Timestamp.fromDate(moment().toDate());
    }

    //convert to uploadDate to current moment and subtract week or month depending on label
    if (filterValues.uploadDate == "") {
      filterValues.uploadDate = Timestamp.fromDate(moment().subtract(1, "day").toDate());
    } else if (filterValues.uploadDate == "Förra veckan") {
      filterValues.uploadDate = Timestamp.fromDate(moment().subtract(1, "week").toDate());
    } else if (filterValues.uploadDate == "Förra månaden") {
      filterValues.uploadDate = Timestamp.fromDate(moment().subtract(1, "month").toDate());
    }

    if (filterValues.location != "") {
      let { location } = filterValues;
      //set all characters to lowercase except the first character
      filterValues.location = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();
    }

    console.log(filterValues);

  }, [filterValues]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <RadioButton
          name="adDate"
          labels={["Nyligen", "Förra veckan", "Förra månaden", "När som helst"]}
          title="Uppläggningsdatum"
          onChange={(label) => { setFilterValues({ ...filterValues, uploadDate: label }) }}
        />
      </div>
      <Divider variant="middle" />
      <div className="mt-2 mb-4">
        <p className="font-mulish font-semibold">Jobba om</p>
        <Date title={["Nu", "1v", "2v", "3v"]} onChange={(title) => {
          setFilterValues({ ...filterValues, startDate: title, });
        }} />
      </div>
      <Divider variant="middle" />
      <div className="flex flex-col mt-2">
        <p className="font-mulish font-semibold">Plats</p>
        <input
          type="text"
          placeholder="t.ex Stockholm"
          className="border border-gray-300 rounded-md p-2 w-5/6 w-max-10 ml-4 my-2"
          onChange={(e) => { setFilterValues({ ...filterValues, location: e.target.value }); }}
        />
      </div>
      <Divider variant="middle" />
      <div className="flex flex-row items-center justify-evenly mt-5">
        <button className="p-2">
          <p className="font-mulish text-primary-color font-semibold hover:opacity-80 ">
            Återställ
          </p>
        </button>
        <button
          className="bg-secondary-color hover:bg-secondary-color-hover text-white p-2 rounded-lg lg:mx-4"
          onClick={() => onSubmit(filterValues)}>
          <p className="font-mulish font-semibold mx-2">
            Visa resultat
          </p>
        </button>
      </div>
    </div>
  );
}
