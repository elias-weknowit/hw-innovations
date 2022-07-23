import React from "react";

export default function InputArea({ placeholder, type }) {
  return (
    <div>
      <div className="transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4 mb-4">
        <label className="text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1."></label>
        <input
          className="w-full px-5 pb-3 text-primary outline-none text-base font-light rounded-lg"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
