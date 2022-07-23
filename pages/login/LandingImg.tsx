import React from "react";
import landing_picture from "../../assets/manWorking.svg";

export const LandingImg = () => {
  return (
    <img
      className="bg-auto bg-no-repeat bg-center"
      src={landing_picture}
      alt="Picture of the author"
    />
  );
};
