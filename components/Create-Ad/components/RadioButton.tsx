import React, { useState } from "react";

interface RadioButtonProps {
  title: string;
  name: string;
  labels: string[];
  onChange: (e) => void;
}

export default function RadioButton({
  title,
  onChange,
  name,
  labels,
}: RadioButtonProps) {
  return (
    <div onChange={(e) => onChange((e.target as HTMLInputElement).value)}>
      <p className="font-mulish font-semibold mb-1">{title}</p>
      {labels.map((label, index) => {
        return (
          <div className="flex items-center mb-5">
            <input
              className="w-5 h-5 border-primary-color focus:ring-primary-color focus:ring-1"
              type="radio"
              value={label}
              defaultChecked={index === 0}
              name={name}
            />
            <label className="ml-4 text-md font-mulish text-primary-color">
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
