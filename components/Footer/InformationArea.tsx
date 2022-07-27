import React from "react";

export default function InformationArea({ Icon, title, subTitle }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex sm:flex-row items-center p-3 m-2">
        <div className="flex rounded-full bg-footer-pink p-2 mr-3">
          <Icon className="w-6 h-6" style={{ color: "#C2B3D4" }} />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-mulish text-white">{title}</p>
          <p className="text-sm font-mulish text-white font-semibold">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
