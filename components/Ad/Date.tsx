import React from "react";

interface DateProps {
  title: string[];
  onChange: (e) => void;
}
export default function Date({ title, onChange }: DateProps) {
  return (
    <div onChange={(e) => onChange((e.target as HTMLInputElement).value)}>
      <div className="flex flex-row justify-between flex-wrap w-3/4 ">
        {title.map((title, index) => {
          {/*Index as key may cause problems if elements change order. Should be changed*/}
          return (
            <button key={index} className="p-2 rounded-lg bg-filterWork hover:bg-filterWorkHover mt-2 ">
              <p className="font-mulish text-footer-pink mx-4">{title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
