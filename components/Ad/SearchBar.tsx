import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import e from "express";

interface SearchBarProp {
  placeholder: string;
  onSubmit: (value: string) => void;
}

export default function SearchBar({ placeholder, onSubmit }: SearchBarProp) {
  const [value, setValue] = React.useState<string>("");

  const handleSubmit = () => {
    onSubmit(value);
  }
  return (
    <div className="flex w-full flex-row items-center md:w-1/2 relative justify-center">
      <div className="flex w-full relative items-center rounded-md shadow-sm">
        <input
          className="bg-searchBar w-full shadow-sm ring-searchBar rounded-md p-2 outline-none ring-1 focus:ring-primary-color"
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
        <SearchIcon className="right-0 mr-2 absolute items-center pointer-events-none" />
      </div>
      <div className="hidden md:block">
        <button onClick={handleSubmit} className="ml-4 bg-secondary-color rounded-md p-2 font-mulish text-white hover:bg-secondary-color-hover hover:text-black">
          <p className="mx-6 font-mulish font-semibold">Sök</p>
        </button>
      </div>
    </div>
  );
}
