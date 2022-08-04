import React, { useState } from "react";
import { Divider } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SaveIcon from "@mui/icons-material/Save";
import ExperienceDetails from "./ExperienceDetails";

export type Experience = {title: string, company: string, to: string, from: string, workTime: number | null}

function experienceIsValid(experience: Experience): boolean {return experience.title.length > 0 && experience.company.length > 0 && experience.to.length > 0 && experience.from.length > 0 /* && experience.workTime !== null*/} 
function experienceIsEmpty(experience: Experience): boolean {return experience.title.length === 0 && experience.company.length === 0 && experience.to.length === 0 && experience.from.length === 0/*&& experience.workTime === null*/}

export default function ExperienceBox() {
  const [newExperiences, setNewExperiences] = useState<Experience[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleAdd = () => {
    let addFlag = true;
    newExperiences.forEach(experience => {
      if (!experienceIsValid(experience) && !experienceIsEmpty(experience)) {
        addFlag = false;
      }
    });

    if(addFlag){
      setExperiences([...experiences, ...(newExperiences.filter(experience => !experienceIsEmpty(experience)))]);
      setNewExperiences([]);
    }

    return addFlag;
  };

  const onNewExperienceEdit = (editedIndex, editedExperience) => {
    setNewExperiences(prev => prev.map( (experience, index) => {
      if(index === editedIndex){
        return editedExperience;
      } else{
        return experience;
      }
    }));
  }

  const onExperienceEdit = (editedIndex, editedExperience) => {
    setExperiences(prev => prev.map( (experience, index) => {
      if(index === editedIndex){
        return editedExperience;
      } else{
        return experience;
      }
    }));
  }

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
        
        <div className="mr-6 flex flex-row">
          <div
            onClick={() => {
              if(isEditing){
                //TODO: Save changes
                if(newExperiences.length > 0){
                  if(!handleAdd()){
                    alert("Du måste fylla i alla fält");                    
                  } else{
                    setIsEditing(false);
                  }
                } else{
                  setIsEditing(false);
                }
              } else{
                setIsEditing(true);
              }
            }}
          >
            {isEditing ? (
              <SaveIcon
                className="w-6 h-6 ml-4 cursor-pointer	"
                style={{ color: "red" }}
              />
            ) : (
              <BorderColorOutlinedIcon
                className="w-6 h-6 ml-4"
                style={{ color: "red" }}
              />
            )}
          </div>
          <div
            onClick={() => {
              setIsEditing(true);
              setNewExperiences( prev => [ {title: "", company: "", to: "", from: "", workTime: null}, ...prev]);
            }}
          >
           
          <AddCircleOutlineOutlinedIcon
            className="w-6 h-6 ml-4"
            style={{ color: "red" }}
          />
            
          </div>
        </div>
      </div>
      <Divider variant="middle" />
      <div className="p-3 flex flex-wrap fle flex-col">
        {newExperiences.map((newExperience, idx) => {
          return <ExperienceDetails key={-idx} experience={newExperience} isEditing={true} onEdit={ e => onNewExperienceEdit(idx, e)} onRemove={() => setNewExperiences((prev) => prev.filter((_, idx2) => idx2 !== idx))} />
        })}
        {experiences.map((experience, idx) => (
          <ExperienceDetails
            key={idx}
            experience={experience}
            isEditing={isEditing}
            onEdit={ e => onExperienceEdit(idx, e)}
            onRemove={() =>
              setExperiences((prev) =>
                prev.filter((_, idx2) => idx2 !== idx)
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
