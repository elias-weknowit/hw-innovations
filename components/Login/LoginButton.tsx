import React from "react";

export default function LoginButton({ title }) {
  return (
    <button className="w-80 justify-start mt-2 rounded-xl h-14 bg-primary-color">
      <p className="content-center text-white text-lg font-mulish">{title}</p>
    </button>
  );
}
