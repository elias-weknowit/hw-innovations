import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProp {
  placeholder: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ placeholder, onChange }: SearchBarProp) {
  return (
    <div className="flex w-full flex-row items-center md:w-1/2 relative justify-center">
      <div className="flex w-full relative items-center rounded-md shadow-sm">
        <input
          className="bg-searchBar w-full shadow-sm ring-searchBar rounded-md p-2 outline-none ring-1 focus:ring-primary-color"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        <SearchIcon className="right-0 mr-2 absolute items-center pointer-events-none" />
      </div>
      <div className="hidden md:block">
        <button className="ml-4 bg-secondary-color rounded-md p-2 font-mulish text-white">
          <p className="mx-6 font-mulish font-semibold">Sök</p>
        </button>
      </div>
    </div>
  );
}
