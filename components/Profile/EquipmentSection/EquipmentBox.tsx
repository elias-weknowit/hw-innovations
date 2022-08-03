import React, { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import SaveIcon from "@mui/icons-material/Save";
import { Divider } from "@mui/material";
import Equipment from "./Equipment";

export default function EquipmentBox() {
  const [equipment, setEquipment] = useState([]);
  const [isAddingEquipment, setIsAddingEquipment] = useState(false);
  const [isRemoveEquipment, setIsRemoveEquipment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!equipment.find((equipment) => equipment === e.target[0].value)) {
      setEquipment((equipment) => [...equipment, e.target[0].value]);
    }
  };

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
          <div
            onClick={() => {
              setIsAddingEquipment(!isAddingEquipment);
              setIsRemoveEquipment(!isRemoveEquipment);
            }}
          >
            {isAddingEquipment ? (
              <SaveIcon
                className="w-6 h-6 ml-4 cursor-pointer	"
                style={{ color: "red" }}
              />
            ) : (
              <BorderColorOutlinedIcon
                className="w-6 h-6 cursor-pointer	"
                style={{ color: "red" }}
              />
            )}
          </div>
        </div>
      </div>
      <Divider variant="middle" />
      <div className="p-3 ml-6 flex flex-wrap">
        {equipment.map((equipment) => (
          <Equipment
            equipmentName={equipment}
            isRemoving={isRemoveEquipment}
            onRemoveEquipment={() =>
              setEquipment((equipments) =>
                equipments.filter(
                  (equipmentName) => equipmentName !== equipment
                )
              )
            }
          />
        ))}
      </div>
      <div className="flex flex-row mb-4 justify-center items-center">
        {isAddingEquipment && (
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              className="font-mulish outline-none ring-1 rounded-lg p-1 ring-white focus:ring-primary-color shadow-md"
              type="text"
              placeholder="Lägg till ny utrustning"
            />
            <button
              className="font-mulish bg-profile-available shadow-md rounded-lg p-1 ml-4"
              type="submit"
            >
              Lägg till
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
