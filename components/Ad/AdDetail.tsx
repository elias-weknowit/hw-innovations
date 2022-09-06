import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Image, { StaticImageData } from "next/image";
import { IconButton } from "@mui/material";
import { Advertisement } from "../../util/models";
import moment from "moment";
import logo from "../../public/Logo.svg";

export default function AdDetail() {
  return (
    <div className="bg-profile-sections shadow-md rounded-md p-4 mb-3 cursor-point  hover:bg-primary-color">
      {/**Company img and edit button */}

      <div className="flex flex-row justify-between items-center ">
        <div className="items-center">
          <Image alt={"Logo"} src={logo} width="50%" height="50%" />
        </div>
      </div>
      {/**Description and place */}
      <div>
        <div>
          <p className="text-md font-mulish font-semibold">Rörmockare</p>
        </div>
        <div className="flex flex-row">
          <div>
            <p className="text-md text-black font-mulish text-opacity-70">
              Företag AB
            </p>
          </div>
          <p className="font-mulish ml-1 mr-1 text-black text-opacity-70">.</p>
          <div>
            <p className="text-md font-mulish text-black text-opacity-70">
              Umeå
            </p>
          </div>
        </div>
      </div>
      {/**Ad: nr of empolyee, available and typ of work */}
      <div className="flex flex-row mt-3 mb-2 items-start">
        <div className="bg-profile-available rounded-lg p-1 mr-2">
          <p className="font-mulish mx-3 text-sm">2 st</p>
        </div>
        <div className="bg-profile-available rounded-lg p-1 mr-2">
          <p className="font-mulish mx-1 text-sm">12 aug -</p>
        </div>

        {/** 
          <div className="bg-profile-available rounded-lg p-1 mr-2">
            <p className="font-mulish mx-1 text-sm">
              Till {moment(ad.period.end).format("YYYY-MM-DD")}
            </p>
          </div>
          */}
      </div>
      {/**Time of post */}
      <div className="flex">
        <p className="font-mulish text-black text-opacity-70 text-sm">
          25 minuter sedan
        </p>
      </div>
    </div>
  );
}
