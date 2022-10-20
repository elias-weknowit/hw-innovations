import React, { useEffect, useState } from "react";
import Link from "next/link";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import { useRef } from "react";

export default function UploadImgForm({ handleSubmit }) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Välj bild");

  const handleFileChange = (e) => {
    const targetFile = e.target.files[0];
    if (!targetFile.name) return

    setFileName(targetFile.name);
    setFile(URL.createObjectURL(targetFile));

    handleSubmit(targetFile);
  }

  const fileInputRef = useRef(null);

  return (
    //"shadow-sm p-1 md:p-2 rounded-md font-mulish w-1/2 "
    <div>
      <div className="shadow-sm p-1 md:p-2 rounded-md font-mulish w-1/2">
        <div className="flex flex-row align-center">
          <input
            ref={fileInputRef}
            type="file"
            id="upload-btn"
            accept="image/*"
            className="hidden text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700"
            onChange={(e) => handleFileChange(e)}
          />
          <div className="flex flex-row items-center">
            {(file && file.length > 0) ? (
              <>
                <label
                  style={{ color: "#8467AA" }}
                  className="font-bold">
                  {file.name}
                </label>
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="flex bg-black bg-opacity-40 rounded-full w-12 h-12 items-center justify-center text-white overflow-hidden 
                    hover:opacity-60 hover:cursor-pointer"
                    onClick={() => fileInputRef.current.click()}
                    src={file}
                  />
                  <label
                    style={{ color: "#8467AA" }}
                    className="font-light text-xs hover:opacity-50 hover:cursor-pointer"
                    onClick={() => fileInputRef.current.click()}
                  >
                    Ändra
                  </label>
                </div>

              </>
            ) :
              <>
                <AddCircleIcon
                  className="w-8 h-8 mr-6 hover:cursor-pointer hover:opacity-50"
                  style={{ color: "#8467AA" }}
                  onClick={() => fileInputRef.current.click()}
                />
              </>
            }
            <label
              style={{ color: "#8467AA" }}
              className="font-bold m-3 truncate text-ellipsis w-60">
              {fileName}
            </label>
          </div>

        </div>
      </div>
    </div>
  );
}
