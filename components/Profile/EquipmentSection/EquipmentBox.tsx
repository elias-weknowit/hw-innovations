import React, { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import SaveIcon from "@mui/icons-material/Save";
import { Divider } from "@mui/material";
import Equipment from "./Equipment";
import { UserDetail } from "../../../util/models";
import { DetailContext } from "../../../pages/userProfile";

export default function EquipmentBox() {
  const { userData, setUserData } = React.useContext(DetailContext);
  const [equipment, setEquipment] = useState(userData?.equipment ?? []);
  const [isAddingEquipment, setIsAddingEquipment] = useState(false);
  const [isRemoveEquipment, setIsRemoveEquipment] = useState(false);
  const [newEquipmentInput, setNewEquipmentInput] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEquipmentInput.length > 0) {
      setEquipment([...equipment, newEquipmentInput]);
      setUserData({ ...userData, equipment: equipment });
      setNewEquipmentInput("");
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
        {equipment.map((equipment, idx) => (
          <Equipment
            key={idx}
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
              onChange={(e) => setNewEquipmentInput(e.target.value)}
              value={newEquipmentInput}
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
