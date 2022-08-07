import React from "react";

export default function RadioButton() {
  return (
    <div>
      <div className="flex items-center mb-4 bg-">
        <input
          id="radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-5 h-5 text-blue-600 bg-gray-100 border-primary-color focus:ring-primary-color focus:ring-1 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="radio-1"
          className="ml-4 text-md font-mulish text-primary-color"
        >
          Jobb
        </label>
      </div>
      <div className="flex items-center mb-5">
        <input
          id="radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-5 h-5 border-primary-color focus:ring-primary-color focus:ring-1"
        />
        <label
          htmlFor="radio-2"
          className="ml-4 text-md font-mulish text-primary-color"
        >
          Arbetskraft
        </label>
      </div>
    </div>
  );
}