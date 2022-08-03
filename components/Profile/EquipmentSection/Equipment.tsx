import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

export default function Equipment({
  equipmentName,
  isRemoving,
  onRemoveEquipment,
}) {
  return (
    <div className="flex flex-row rounded-xl p-2 m-1 bg-profile-available">
      <p className="font-mulish">{equipmentName}</p>
      {isRemoving && (
        <div onClick={onRemoveEquipment}>
          <ClearIcon
            className="w-4 h-4 ml-2 cursor-pointer"
            style={{ color: "red" }}
          />
        </div>
      )}
    </div>
  );
}
