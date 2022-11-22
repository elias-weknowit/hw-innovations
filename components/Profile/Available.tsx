import React from "react";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import { Divider } from "@mui/material";
import { UserDetail } from "../../util/models";

export default function Available({ startDate, endDate }: { startDate: string, endDate: string }) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-center w-full py-2 sm:py-4 md:py-6">
      <div className="lg:w-1/2 flex">
        <div className="flex flex-row items-center">
          <EventAvailableOutlinedIcon
            className="h-7 w-7"
            style={{ color: "red" }}
          />
          <p className="text-lg lg:text-lg font-bold font-mulish m-2 text-black">
            Tillgänglighet
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <div className="font-mulish text-lg font-bold text-black">Från</div>
          <div className="font-mulish text-black justify-end">{startDate}</div>
        </div>
        <Divider className="text-light-text"></Divider>
        <div className="flex flex-row justify-between">
          <div className="font-mulish text-lg font-bold text-black">Till</div>
          <div className="flex font-mulish justify-end text-black">
            {endDate}
          </div>
        </div>
      </div>
    </div>
  );
}
