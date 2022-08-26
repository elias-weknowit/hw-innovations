import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function FilterButton() {
  return (
    <div className="flex w-1/4 bg-primary-color rounded-md ml-4 justify-center md:hidden">
      <div className="flex p-1">
        <FilterListIcon className="h-8 w-8" style={{ color: "white" }} />
      </div>
    </div>
  );
}
