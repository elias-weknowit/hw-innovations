import Image, { StaticImageData } from "next/image";
import { User } from "firebase/auth";
import React from "react";

interface UserPresentationProps {
  image: string | StaticImageData;
  username: string;
  userPosition: string;
}

export default function UserPresentation({
  image,
  username,
  userPosition,
}: UserPresentationProps) {
  return (
    <div className="flex flex-row items-center justify-start w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="bg-success bg-opacity-30 p-2 lg:p-4 rounded-full m-1 text-white lg:flex-shrink-0">
          <Image src={image} width="100%" height="100%" />
        </div>
        <div className="flex flex-col justify-center p-4">
          <p className="text-lg lg:text-4xl font-mulish text-white">
            {username}
          </p>
          <p className="text-sm opacity-80 lg:mt-4 font-mulish text-white">
            {userPosition}
          </p>
        </div>
      </div>
    </div>
  );
}
