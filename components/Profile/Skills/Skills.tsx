import React from "react";

export default function Skills({ skillName }) {
  return (
    <div className="flex flex-row rounded-xl p-2 m-1 bg-profile-available">
      <p className="font-mulish">{skillName}</p>
    </div>
  );
}
