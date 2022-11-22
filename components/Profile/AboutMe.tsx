import React, { useState } from "react";
import { Divider } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { UserDetail } from "../../util/models";
import { DetailContext } from "../../pages/userProfile";

export default function AboutMe({ title }: { title: string }) {
  const [aboutmeText, setAboutmeText] = useState("");
  const charactarLimit = 300;
  const { userData, setUserData } = React.useContext(DetailContext);

  const handleChange = (event) => {
    if (charactarLimit - event.target.value.length >= 0) {
      setAboutmeText(event.target.value);
      setUserData({ ...userData, about: event.target.value });
    }
  };

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
      <div className="p-3">
        <div className="flex flex-col">
          <textarea
            className="block w-full font-mulish p-3 md:mx-1 bg-profile-sections border-none resize-none focus:outline-none text-md"
            placeholder="Berätta om dig själv..."
            rows={7}
            value={userData?.about ?? ""}
            onChange={handleChange}
          />
          <small className="flex justify-end font-mulish mr-2">
            <p className="font-mulish font-semibold ">{aboutmeText.length}</p>
            /300
          </small>
        </div>
      </div>
    </div>
  );
}
