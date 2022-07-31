import React from "react";
import { Divider } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ExperienceDetails from "./ExperienceDetails";

export default function Experience() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between p-3">
        <div className="flex flex-row items-center ml-6">
          <BusinessCenterOutlinedIcon
            className="w-6 h-6 ml-4"
            style={{ color: "red" }}
          />
          <p className="font-mulish text-xl m-2 ml-3 font-bold">
            Erfarenhet/Tidigare arbetsgivare
          </p>
        </div>
        <div className="mr-6">
          <AddCircleOutlineOutlinedIcon
            className="w-6 h-6 ml-4"
            style={{ color: "red" }}
          />
        </div>
      </div>
      <Divider variant="middle" />
      <ExperienceDetails
        title="Rörmokare"
        companyName="Byggsen AB"
        startDate="Jan 2015"
        endDate="Feb 2022"
        totYear="5år"
      />
      <ExperienceDetails
        title="Rörmokare"
        companyName="Byggsen AB"
        startDate="Jan 2015"
        endDate="Feb 2022"
        totYear="5år"
      />
    </div>
  );
}
