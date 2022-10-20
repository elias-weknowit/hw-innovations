import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import UploadImgForm from "../Create-Ad/components/UploadImgForm";

export default function EditProfile() {
  return (
    <div className=" flex rounded-lg w-full justify-center bg-footer-pink bg-opacity-30">
      <div className="flex flex-row p-1 m-1">
        <button className="flex justify-center">
          <p className="font-mulish">Redigera profil</p>
          <BorderColorOutlinedIcon
            className="w-6 h-6 ml-4"
            style={{ color: "#fff" }}
          />
        </button>
      </div>
      <UploadImgForm handleSubmit={() => { }} />
    </div>
  );
}
