import React from "react";

export default function InputArea({ placeholder, type }) {
  return (
    <div>
      <div className="border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4">
        <label className="text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5"></label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md"
        />
      </div>
    </div>
  );
}
