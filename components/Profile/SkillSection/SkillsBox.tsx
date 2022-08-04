import React, { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import SaveIcon from "@mui/icons-material/Save";
import { Divider } from "@mui/material";
import Skill from "./Skill";

export default function SkillsBox() {
  const [skills, setSkills] = useState([]);
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [isRemovingSkill, setIsRemovingSkill] = useState(false);
  const [newSkillInput, setNewSkillInput] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skills.find((skill) => skill === e.target[0].value)) {
      setSkills((skills) => [...skills, e.target[0].value]);
      setNewSkillInput("");
    }
  };

  return (
    <div className="flex flex-col ml-6">
      <div className="flex flex-row items-center justify-between p-3">
        <div className="flex flex-row items-center ">
          <MilitaryTechOutlinedIcon
            className="w-6 h-6"
            style={{ color: "red" }}
          />
          <p className="font-mulish text-xl m-2 ml-3 font-bold">Färdigheter</p>
        </div>
        <div className="mr-6">
          <div
            onClick={() => {
              setIsAddingSkill(!isAddingSkill);
              setIsRemovingSkill(!isRemovingSkill);
            }}
          >
            {isAddingSkill ? (
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
      <div className="p-3 flex flex-wrap">
        {skills.map((skill) => (
          <Skill
            skillName={skill}
            isRemoving={isRemovingSkill}
            onRemoveSkill={() =>
              setSkills((skills) =>
                skills.filter((skillName) => skillName !== skill)
              )
            }
          />
        ))}
      </div>
      <div className="flex flex-row mb-4 justify-center items-center">
        {isAddingSkill && (
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              className="font-mulish outline-none ring-1 rounded-lg p-1 ring-white focus:ring-primary-color shadow-md"
              type="text"
              placeholder="Lägg till nya färdigheter..."
              onChange={(e) => setNewSkillInput(e.target.value)}
              value={newSkillInput}
            />
            <button
              className="font-mulish bg-profile-available shadow-md  rounded-lg p-1 ml-4"
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
