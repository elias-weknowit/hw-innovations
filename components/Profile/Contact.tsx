import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import { Divider } from "@mui/material";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between p-3">
        <div className="flex flex-row items-center ml-6">
          <BusinessCenterOutlinedIcon
            className="w-6 h-6"
            style={{ color: "red" }}
          />
          <p className="font-mulish text-xl m-2 ml-3 font-bold">
            Kontaktuppgifter
          </p>
        </div>
        <div className="mr-6">
          <BorderColorOutlinedIcon
            className="w-6 h-6 ml-4"
            style={{ color: "red" }}
          />
        </div>
      </div>
      <Divider variant="middle" />
      <div className="p-3 ml-6">
        <div className="flex flex-col mb-4">
          <p className="font-mulish text-xl font-semibold">Platschef</p>
          <div className="flex flex-row justify-between  mt-2 mr-6">
            <p className="font-mulish">Linda Nilsson</p>
            <p className="font-mulish">+46 999 99 99</p>
          </div>
        </div>
        <div className="flex flex-col text-md text-light-text">
          <p className="font-mulish">Vägen 11</p>
          <p className="font-mulish">907 30, Umeå</p>
        </div>
      </div>
    </div>
  );
}
