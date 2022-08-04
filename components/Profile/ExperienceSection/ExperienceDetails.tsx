import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import { Divider } from "@mui/material";

export default function ExperienceDetails({
  title,
  isRemoving,
  onRemoveExperience,
}) {
  return (
    <div className="p-3 ml-6">
      <div className="flex flex-col mb-4">
        <div className="flex flex-row justify-between mr-6">
          <p className="font-mulish text-lg font-bold">{title}</p>
          <div className="flex flex-row items-center">
            {isRemoving && (
              <div onClick={onRemoveExperience}>
                <BorderColorOutlinedIcon
                  className="w-5 h-5 cursor-pointer"
                  style={{ color: "red" }}
                />
                <DeleteIcon
                  className="w-5 h-5 ml-2 cursor-pointer"
                  style={{ color: "red" }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between mt-2 mr-6">
          <p className="font-mulish"></p>
          <div className="flex flex-row">
            <p className="font-mulish mr-2">gs -gd</p>
            <p className="font-mulish">(2år)</p>
          </div>
        </div>
      </div>
      <Divider variant="middle" />
    </div>
  );
}
