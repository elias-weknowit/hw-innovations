import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Divider } from "@mui/material";

export default function ExperienceDetails({
  title,
  companyName,
  startDate,
  endDate,
  totYear,
}) {
  return (
    <div className="p-3 ml-6">
      <div className="flex flex-col mb-4">
        <div className="flex flex-row justify-between mr-6">
          <p className="font-mulish text-lg font-bold">{title}</p>
          <BorderColorOutlinedIcon
            className="w-5 h-5"
            style={{ color: "red" }}
          />
        </div>
        <div className="flex flex-row justify-between mt-2 mr-6">
          <p className="font-mulish">{companyName}</p>
          <div className="flex flex-row">
            <p className="font-mulish mr-2">
              {startDate} - {endDate}
            </p>
            <p className="font-mulish">({totYear})</p>
          </div>
        </div>
      </div>
      <Divider variant="middle" />
    </div>
  );
}
