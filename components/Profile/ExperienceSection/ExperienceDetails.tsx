import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import { Divider } from "@mui/material";
import { Experience } from "./ExperienceBox";

interface ExperienceDetailsProps {
  experience: {
    title: string;
    company: string;
    to: string;
    from: string;
    workTime: number;
  };
  isEditing: boolean;
  onRemove: () => void;
  onEdit: (exp: Experience) => void;
}

export default function ExperienceDetails({
  experience,
  isEditing,
  onRemove,
  onEdit,
}: ExperienceDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="w-full p-3 flex space-between">
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex flex-row justify-between mr-6">
            {isEditing ? (
              <input
                value={experience.title}
                onChange={(e) =>
                  onEdit({ ...experience, title: e.target.value })
                }
                className="font-mulish outline-none ring-1 rounded-lg p-1 ring-white focus:ring-primary-color shadow-md"
                type={"text"}
                placeholder="Vad jobbade du med?"
              />
            ) : (
              <p className="font-mulish text-lg font-bold">
                {experience.title}
              </p>
            )}
            <div className="flex flex-row items-center">
              {isEditing && (
                <div onClick={onRemove}>
                  <DeleteIcon
                    className="w-5 h-5 ml-2 cursor-pointer"
                    style={{ color: "red" }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="lg:flex justify-between items-center space-y-4 lg:space-y-0">
            {isEditing ? (
              <input
                value={experience.company}
                onChange={(e) =>
                  onEdit({ ...experience, company: e.target.value })
                }
                className="font-mulish outline-none ring-1 rounded-lg p-1 ring-white focus:ring-primary-color shadow-md"
                type={"text"}
                placeholder="Företag"
              />
            ) : (
              <p className="font-mulish">{experience.company}</p>
            )}
            <div className="flex flex-row">
              {isEditing ? (
                <div className="md:flex md:flex-row">
                  <input
                    value={experience.from}
                    onChange={(e) =>
                      onEdit({ ...experience, from: e.target.value })
                    }
                    className="font-mulish outline-none ring-1 rounded-lg p-1 ring-white focus:ring-primary-color shadow-md"
                    type="text"
                    placeholder="Från"
                  />
                  <p className="font-mulish mr-2 ml-2"> - </p>
                  <input
                    value={experience.to}
                    onChange={(e) =>
                      onEdit({ ...experience, to: e.target.value })
                    }
                    className="font-mulish outline-none ring-1 rounded-lg p-1 ring-white focus:ring-primary-color shadow-md"
                    type="text"
                    placeholder="Till"
                  />
                </div>
              ) : (
                <p className="font-mulish mr-2">
                  {experience.from + " - " + experience.to}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>{" "}
      <Divider variant="middle" />
    </div>
  );
}
