import React from "react";
import { Divider } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

export default function AboutMe({ title }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between p-3">
        <div className="flex flex-row items-center ml-6">
          <AccountCircleOutlinedIcon
            className="w-6 h-6"
            style={{ color: "red" }}
          />
          <p className="font-mulish text-xl m-2 ml-3 font-bold">{title}</p>
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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting. Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s.
      </div>
    </div>
  );
}
