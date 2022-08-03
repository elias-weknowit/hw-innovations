import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface InputAreaProps {
  placeholder: string;
  type: string;
  IconComponent: any;
  Password_hide?: any;
  password_visibility?: boolean;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Password_Visibile?: any;
  valid_user?: boolean;
  error?: boolean;
  errorMessage?: string;
}

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
  error = false,
  errorMessage = "",
}) {
  return (
    <div className="mb-4">
      <span className={"flex justify-center w-80 transition duration-150 ease-in-out"}>
        <div className="w-full relative flex">
          <div className="w-full relative flex items-center">
            <IconComponent
              className="w-6 h-6 absolute ml-3 pointer-events-none"
              style={{ color: "#6F6F6F" }}
            />
            <input
              className={`w-80 px-12 h-14 text-primary outline-none text-base font-light rounded-md border-none ring-1 ring-white focus:ring-primary-color `  + (error ? "ring-error" : "")}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
            />
            <label
              className="flex justify-end items-center cursor-pointer"
              onClick={onClick}
            >
              {(Password_hide && Password_Visibile) && (
                password_visibility ? (
                  <Password_hide
                    className="w-5 h-5 absolute mr-5"
                    style={{ color: "#000" }}
                  />
                ) : (
                  <Password_Visibile
                    className="w-5 h-5 absolute mr-5"
                    style={{ color: "#000" }}
                  />
                )
              )}
            </label>
          </div>
          <div className="flex items-center ml-2">
            {valid_user && (
              <CheckCircleIcon
                className="w-5 h-5 bg-success"
              />
            )}
          </div>
        </div>
      </span>
      <p className={"ml-1 font-mulish text-sm text-error"}>{error ? errorMessage : ""}</p>
    </div>
  );
}
