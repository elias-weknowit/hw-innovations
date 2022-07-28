import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function InputArea({
  placeholder,
  type,
  IconComponent,
  Password_hide,
  password_visibility,
  onClick,
  onChange,
  Password_Visibile,
  valid_user = false,
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
              className={`w-80 px-12 h-14 text-primary outline-none text-base font-light rounded-md border-none ring-1 ring-white focus:ring-primary-color`}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
            />
            <label
              className="flex justify-end items-center cursor-pointer"
              onClick={onClick}
            >
              {password_visibility ? (
                <Password_hide
                  className="w-5 h-5 absolute mr-5"
                  style={{ color: "#000" }}
                />
              ) : (
                <Password_Visibile
                  className="w-5 h-5 absolute mr-5"
                  style={{ color: "#000" }}
                />
              )}
            </label>
          </div>
          <div className="flex items-center ml-2">
            {valid_user && (
              <CheckCircleIcon
                className="w-5 h-5"
                style={{ color: "#009262" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
