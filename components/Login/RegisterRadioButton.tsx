import React, { useState } from "react";

interface RadioButtonProps {
  alt_one: string;
  alt_two: string;
  value_one: string;
  value_two: string;
  onChange: (e) => void;
}

export default function RegisterRadioButton({
  alt_one,
  alt_two,
  value_one,
  value_two,
  onChange,
}: RadioButtonProps) {
  return (
    <div className="flex justify-center font-mulish p-2">
      <div className="flex items-center mr-4">
        <input
          id="alt_one"
          type="radio"
          value={value_one}
          name="userType"
          defaultChecked={true}
          className="w-4 h-4 border-primary-color accent-primary-color focus:ring-primary-color focus:ring-1"
          onChange={onChange}
        />
        <label
          htmlFor="inline-radio"
          className="ml-2 text-md text-primary-color"
        >
          {alt_one}
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          id="alt_two"
          type="radio"
          value={value_two}
          name="userType"
          className="w-4 h-4 border-primary-color accent-primary-color focus:ring-primary-color focus:ring-1"
          onChange={onChange}
        />
        <label
          htmlFor="inline-2-radio"
          className="ml-2 text-md text-primary-color"
        >
          {alt_two}
        </label>
      </div>
    </div>
  );
}
