import React from "react";

export default function InputArea({
  placeholder,
  type,
  IconComponent,
  HidePassword,
}) {
  return (
    <div>
      <div className="flex jus w-80 transition duration-150 ease-in-out focus-within:border-primary mb-4">
        <div className="w-full relative flex">
          <div className="w-full relative flex items-center">
            <IconComponent
              className="w-6 h-6 absolute ml-3 pointer-events-none"
              style={{ color: "#6F6F6F" }}
            />
            <input
              className="w-80 px-12 h-14 text-primary outline-none text-base font-light rounded-md border-none ring-1 ring-white focus:ring-primary-color"
              type={type}
              placeholder={placeholder}
            />
            <button className="flex justify-end items-center">
              <HidePassword
                className="w-5 h-5 absolute mr-5"
                style={{ color: "#000" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
