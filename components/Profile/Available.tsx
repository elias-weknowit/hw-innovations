import React from "react";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import { Divider } from "@mui/material";

export default function Available({ startDate, endDate }) {
  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className="md:w-1/2">
        <div className="flex flex-row md:items-center md:m-10">
          <EventAvailableOutlinedIcon
            className="h-7 w-7"
            style={{ color: "red" }}
          />
          <p className="text-md md:text-lg font-bold font-mulish m-2 text-black">
            Tillgänglighet
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center m-2">
        <div className="flex flex-row">
          <div className="font-mulish text-md font-bold mr-10 text-black">
            Från
          </div>
          <div className="font-mulish text-black">{startDate}</div>
        </div>
        <Divider className="text-light-text"></Divider>
        <div className="flex flex-row">
          <div className="font-mulish text-md font-bold mr-10 text-black">
            Från
          </div>
          <div className="font-mulish text-black">{endDate}</div>
        </div>
      </div>
    </div>
  );
}
