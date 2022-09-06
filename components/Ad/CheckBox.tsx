import React from "react";

interface CheckBoxProps {
  title: string;
  name: string;
  labels: string[];
  onChange: (e) => void;
}

export default function CheckBox({
  title,
  onChange,
  name,
  labels,
}: CheckBoxProps) {
  return (
    <div onChange={(e) => onChange((e.target as HTMLInputElement).value)}>
      <p className="font-mulish font-semibold mb-5">{title}</p>
      {labels.map((label, index) => {
        {/*Index as key may cause problems if items change order. Should be changed*/}
        return (
          <div key={index} className="flex items-center mb-5">
            <input
              className="w-5 h-5 border-primary-color rounded-lg accent-primary-color"
              type="checkbox"
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
