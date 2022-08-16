import React, { useState } from "react";

export default function InputForm({
  sort,
  labelName,
  type,
  value,
  onChange,
}: {
  sort?: boolean;
  labelName: string;
  type: string;
  value: string;
  onChange: any;
}) {
  const [textAreaText, setTextAreaText] = useState("");
  const charactarLimit = 500;
  let previousLength = 0;

  const handleChange = (event) => {
    if (charactarLimit - event.target.value.length >= 0) {
      setTextAreaText(event.target.value);
    }
  };

  const handleTextArea = (event) => {
    const bullet = "\u2022";
    const newLength = event.target.value.length;
    const charactarText = event.target.value.substr(-1).charCodeAt(0);

    if (newLength > previousLength) {
      if (charactarText === 10) {
        event.target.value = `${event.target.value}${bullet}`;
      } else if (newLength === 1) {
        event.target.value = `${bullet} ${event.target.value}`;
      }
    }

    previousLength = newLength;
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="font-mulish font-semibold mb-1">{labelName}</label>
      {sort ? (
        <input
          className="p-2 rounded-md font-mulish shadow-md outline-none ring-white ring-1 focus:ring-primary-color"
          type={type}
          value={value}
          onChange={onChange}
        />
      ) : (
        <div className="flex flex-col">
          <textarea
            className="block w-full font-mulish p-3 md:mx-1 bg-profile-sections border-none resize-none outline-none ring-profile-sections ring-1 focus:ring-primary-color text-md rounded-lg shadow-md"
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
