import React from "react";

export default function UserPresentation({ userName, userPosition }) {
  return (
    <div className="flex flex-row items-center justify-start w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center bg-primary-color">
        <div className="bg-black bg-opacity-30 p-10 md:p-16 rounded-full m-4 text-white">
          Img
        </div>
        <div className="flex flex-col justify-center p-4 md:p-3">
          <p className="sm:text-lg md:text-4xl font-mulish text-white">
            {userName}
          </p>
          <p className="text-sm opacity-80 md:mt-4 font-mulish text-white">
            {userPosition}
          </p>
        </div>
      </div>
    </div>
  );
}
