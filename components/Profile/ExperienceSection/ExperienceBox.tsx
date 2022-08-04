import React, { useState } from "react";
import { Divider } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SaveIcon from "@mui/icons-material/Save";
import ExperienceDetails from "./ExperienceDetails";

export default function ExperienceBox() {
  const [title, setTitle] = useState([]);
  const [companyName, setCompanyName] = useState([]);
  const [isAddingExperience, setIsAddingExperience] = useState(false);
  const [isRemovingExperience, setIsRemovingExperience] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.find((title) => title === e.target[0].value)) {
      setTitle((titles) => [...titles, e.target[0].value]);
    }
    if (!companyName.find((companyName) => companyName === e.target[0].value)) {
      setCompanyName((companyNames) => [...companyNames, e.target[0].value]);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between p-3">
        <div className="flex flex-row items-center ml-6 ">
          <BusinessCenterOutlinedIcon
            className="w-6 h-6 ml-4"
            style={{ color: "red" }}
          />
          <p className="font-mulish text-xl m-2 ml-3 font-bold">
            Erfarenhet/Tidigare arbetsgivare
          </p>
        </div>
        <div className="mr-6">
          <div
            onClick={() => {
              setIsAddingExperience(!isAddingExperience);
              setIsRemovingExperience(!isRemovingExperience);
            }}
          >
            {isAddingExperience ? (
              <SaveIcon
                className="w-6 h-6 ml-4 cursor-pointer	"
                style={{ color: "red" }}
              />
            ) : (
              <AddCircleOutlineOutlinedIcon
                className="w-6 h-6 ml-4"
                style={{ color: "red" }}
              />
            )}
          </div>
        </div>
      </div>
      <Divider variant="middle" />
      <div className="p-3 flex flex-wrap fle flex-col">
        {title.map((title) => (
          <ExperienceDetails
            title={title}
            isRemoving={isRemovingExperience}
            onRemoveExperience={() =>
              setTitle((experience) =>
                experience.filter((name) => name !== title)
              )
            }
          />
        ))}
      </div>
      <div>
        {isAddingExperience && (
          <form onSubmit={handleSubmit}>
            <div className="md:ml-6 m-2">
              <input
                className="font-mulish outline-none ring-1 rounded-lg p-1 ring-white focus:ring-primary-color shadow-md"
                type="text"
                placeholder="Lägg till nya färdigheter..."
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
