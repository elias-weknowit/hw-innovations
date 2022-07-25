import Link from "next/link";
import React from "react";

export default function LoginButton({ title }) {
  return (
    <button className="w-1/2 justify-start mt-4 ml-36 rounded-xl h-14 bg-primary-color">
      <p className="content-center text-white">{title}</p>
    </button>
  );
}
