import React from "react";

export default function UserPresentation({ userName, userPosition }) {
  return (
    <div className="flex items-center justify-start w-full">
      <div className="flex flex-row items-center">
        <div className="bg-black bg-opacity-30 p-16 rounded-full m-4 text-white">
          Img
        </div>
        <div className="flex flex-col p-3">
          <p className="sm:text-lg md:text-4xl font-mulish text-white">
            {userName}
          </p>
          <p className="smtext-sm opacity-80 mt-4 font-mulish text-white">
            {userPosition}
          </p>
        </div>
      </div>
    </div>
  );
}
