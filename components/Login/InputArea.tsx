import React from "react";
import MailIcon from "@mui/icons-material/Mail";

export default function InputArea({ placeholder, type }) {
  return (
    <div>
      <div className="flex w-80 transition duration-150 ease-in-out focus-within:border-primary mb-4">
        <div className="w-full relative flex items-center">
          <MailIcon className="w-6 h-6 absolute ml-3 pointer-events-none" />
          <input
            className="w-full px-12 h-14 text-primary outline-none text-base font-light rounded-xl border-none ring-1 ring-white focus:ring-primary-color"
            type={type}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}
