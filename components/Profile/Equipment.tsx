import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import { Divider } from "@mui/material";

export default function Equipment() {
  return (
    <div className="flex flex-col mb-5 md:mb-20">
      {" "}
      <div className="flex flex-row items-center justify-between p-3">
        <div className="flex flex-row items-center ml-6">
          <BuildOutlinedIcon
            className="w-6 h-6 ml-4"
            style={{ color: "red" }}
          />
          <p className="font-mulish text-xl m-2 ml-3 font-bold">Utrustning</p>
        </div>
        <div className="mr-6">
          <BorderColorOutlinedIcon
            className="w-6 h-6 ml-4"
            style={{ color: "red" }}
          />
        </div>
      </div>
      <Divider variant="middle" />
      <div className="p-3 ml-6">Massa boxar här genom att mapa ut. </div>
    </div>
  );
}
