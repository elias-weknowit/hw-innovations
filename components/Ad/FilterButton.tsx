import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function FilterButton({ onClickHandler }: { onClickHandler: () => void }) {
  const [isClicked, setIsClicked] = React.useState(false);



  return (
    <div
      className={`flex w-1/4 bg-primary-color rounded-md ml-4 justify-center md:hidden hover:opacity-80 hover:cursor-pointer ${isClicked ? "opacity-80" : ""}`}
      onClick={() => {
        onClickHandler();
        setIsClicked(!isClicked)
      }}>
      <div className="flex p-1">
        <FilterListIcon className="h-8 w-8" style={{ color: "white" }} />
      </div>
    </div>
  );
}
