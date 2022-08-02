import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

export default function Skill({ skillName, isRemoving, onRemoveSkill }) {
  return (
    <div className="flex flex-row rounded-xl p-2 m-1 bg-profile-available">
      <p className="font-mulish">{skillName}</p>
      {isRemoving && (
        <div onClick={onRemoveSkill}>
          <ClearIcon
            className="w-4 h-4 ml-2 cursor-pointer"
            style={{ color: "red" }}
          />
        </div>
      )}
    </div>
  );
}
