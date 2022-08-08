import React from "react";
import Link from "next/link";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function UploadImgForm() {
  return (
    <div>
      <div className="shadow-sm p-1 md:p-2 rounded-md font-mulish w-1/2 ">
        <div className="flex flex-row items-center">
          <AddCircleIcon
            className="w-6 h-6 mr-2"
            style={{ color: "#8467AA" }}
          />
          <input
            type="file"
            className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          "
          />
        </div>
      </div>
    </div>
  );
}
