import Image, { StaticImageData } from "next/image";
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
        <div className="flex bg-black bg-opacity-40 rounded-full w-24 h-24 items-center justify-center text-white overflow-hidden">
          <Image alt="Profile" src={image} layout="intrinsic" objectFit="cover" width="100%" height="100%" />
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
