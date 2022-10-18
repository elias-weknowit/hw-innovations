import React, { useEffect, useState } from "react";
import Link from "next/link";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";

export default function UploadImgForm({ handleSubmit }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const targetFile = e.target.files[0];
    const fileFormData = new FormData();
    setFile(URL.createObjectURL(targetFile));

    Object.keys(targetFile).forEach((key) => {
      fileFormData.append(key, targetFile[key]);
    });

    handleSubmit(fileFormData);
  }

  return (
    //"shadow-sm p-1 md:p-2 rounded-md font-mulish w-1/2 "
    <div>
      <div className="shadow-sm p-1 md:p-2 rounded-md font-mulish w-full">
        <div className="flex flex-row items-center">
          <AddCircleIcon
            className="w-6 h-6 mr-2"
            style={{ color: "#8467AA" }}
          />
          <input
            type="file"
            accept="image/*"
            className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700"
            onChange={(e) => handleFileChange(e)}
          />
          {(file && file.length > 0) && (
            <img
              className="flex bg-black bg-opacity-40 rounded-full w-12 h-12 items-center justify-center text-white overflow-hidden"
              src={file}
            />
          )/*TODO: Display a deafual profile picture if file haven been uploaded */}
        </div>
      </div>
    </div>
  );
}
