import React from "react";

export default function LoginButton({ title, onClick }: { title: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-80 justify-start mt-2 rounded-md h-14 bg-primary-color">
      <p className="content-center text-white text-lg font-mulish">{title}</p>
    </button>
  );
}
