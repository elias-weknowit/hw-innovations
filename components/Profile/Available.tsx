import React from "react";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import { Divider } from "@mui/material";

export default function Available({ startDate, endDate }) {
  return (
    <div className="flex flex-row items-center  w-full">
      <div className="w-1/2">
        <div className="flex flex-row items-center m-10">
          <EventAvailableOutlinedIcon
            className="h-7 w-7"
            style={{ color: "red" }}
          />
          <p className="text-lg font-bold font-mulish m-2 text-black">
            Tillgänglighet
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
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
