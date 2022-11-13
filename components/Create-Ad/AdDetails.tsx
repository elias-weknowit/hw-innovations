import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Image, { StaticImageData } from "next/image";
import { IconButton } from "@mui/material";
import { Advertisement } from "../../util/models";
import moment from "moment";

interface AdDetailsProp {
  image: string | StaticImageData;
  onEdit: () => void;
  ad: Advertisement;
  onClick: () => void;
}

export default function AdDetails({
  image,
  onEdit,
  onClick,
  ad,
}: AdDetailsProp) {
  return (
    <div className="bg-profile-sections shadow-md rounded-md p-3 mt-3 cursor-point hover:bg-primary-color mb-4">
      {/**Company img and edit button */}

      <div className="flex flex-row justify-between items-center ">
        <div className='block bg-black bg-opacity-40 rounded-full w-16 h-16 items-center justify-center text-white overflow-hidden'>
          <Image alt={"Logo"} src={image} layout="intrinsic" objectFit="cover" width="100%" height="100%" />
        </div>
        <div className="p-1">
          <IconButton onClick={onEdit}>
            <BorderColorOutlinedIcon
              className="w-6 h-6 cursor-point"
              style={{ color: "red" }}
            />
          </IconButton>
        </div>
      </div>
      {/**Description and place */}
      <div onClick={onClick} className="cursor-pointer">
        <div>
          <p className="text-md font-mulish font-semibold">{ad.title}</p>
        </div>
        <div className="flex flex-row">
          <div>
            <p className="text-md text-black font-mulish text-opacity-70">
              {ad.company}
            </p>
          </div>
          <p className="font-mulish ml-1 mr-1 text-black text-opacity-70">.</p>
          <div>
            <p className="text-md font-mulish text-black text-opacity-70">
              {ad.location}
            </p>
          </div>
        </div>
      </div>
      {/**Ad: nr of empolyee, available and typ of work */}
      <div className="flex flex-col mt-3 mb-2 items-start">
        <div className="flex mb-2">
          <div className="bg-profile-available rounded-lg p-1 mr-2">
            <p className="font-mulish mx-3 text-sm">{ad.amount} st</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="bg-profile-available rounded-lg p-1 mr-2">
            <p className="font-mulish mx-1 text-sm">
              {ad.period?.start ? moment(ad.period.start).format("YYYY-MM-DD") : "placeholder"}
            </p>
          </div>
          <p className="font-mulish font-normal mr-2">Till</p>
          <div className="bg-profile-available rounded-lg p-1 mr-2">
            <p className="font-mulish mx-1 text-sm">
              {ad.period?.end ? moment(ad.period.end).format("YYYY-MM-DD") : "placeholder"}
            </p>
          </div>
        </div>
      </div>
      {/**Time of post */}
      <div className="flex">
        <p className="font-mulish text-black text-opacity-70 text-sm">
          {
            //@ts-ignore
            moment.unix(ad.createdAt.seconds).fromNow()
          }
        </p>
      </div>
    </div>
  );
}
