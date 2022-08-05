import React, { useState } from "react";

export default function InputForm({
  type,
  labelName,
}: {
  type?: boolean;
  labelName: string;
}) {
  const [textAreaText, setTextAreaText] = useState("");
  const charactarLimit = 500;

  const handleChange = (event) => {
    if (charactarLimit - event.target.value.length >= 0) {
      setTextAreaText(event.target.value);
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="font-mulish font-semibold mb-1">{labelName}</label>
      {type ? (
        <input
          className="p-2 rounded-md font-mulish shadow-sm outline-none ring-white ring-1 focus:ring-primary-color"
          type="text"
        />
      ) : (
        <div className="flex flex-col">
          <textarea
            className="block w-full font-mulish p-3 md:mx-1 bg-profile-sections border-none resize-none outline-none ring-white ring-1 focus:ring-primary-color text-md rounded-lg shadow-sm"
            rows={7}
            value={textAreaText}
            onChange={handleChange}
          />
          <small className="flex justify-end font-mulish mt-1">
            <p className="font-mulish font-semibold">{textAreaText.length}</p>
            /500
          </small>
        </div>
      )}
    </div>
  );
}
