import React, { useState } from "react";

interface RadioButtonProps {
  title: string;
  alt_one: string;
  alt_two: string;
  onChange: () => void;
}

export default function RadioButton({
  title,
  alt_one,
  alt_two,
  onChange,
}: RadioButtonProps) {
  return (
    <div>
      <p className="font-mulish font-semibold mb-1">{title}</p>
      <div className="flex items-center mb-4">
        <input
          className="w-5 h-5 text-blue-600 bg-gray-100 border-primary-color focus:ring-primary-color focus:ring-1 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
          id="radio-1"
          type="radio"
          value=""
          name="altOne"
          onChange={onChange}
        />
        <label
          htmlFor="radio-1"
          className="ml-4 text-md font-mulish text-primary-color"
        >
          {alt_one}
        </label>
      </div>
      <div className="flex items-center mb-5">
        <input
          className="w-5 h-5 border-primary-color focus:ring-primary-color focus:ring-1"
          id="radio-2"
          type="radio"
          value=""
          name="altTwo"
          onChange={onChange}
        />
        <label
          htmlFor="radio-2"
          className="ml-4 text-md font-mulish text-primary-color"
        >
          {alt_two}
        </label>
      </div>
    </div>
  );
}
