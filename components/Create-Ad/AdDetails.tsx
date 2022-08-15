import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Image, { StaticImageData } from "next/image";
import { IconButton } from "@mui/material";
import { Ad } from "../../shared/types";
import { Advertisement } from "../../util/models";
import moment from "moment";
import Link from "next/link";

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
    <div className="bg-profile-sections shadow-md rounded-md p-2 mt-3 cursor-point hover:bg-primary-color">
      {/**Company img and edit button */}

      <div className="flex flex-row justify-between items-center ">
        <div className="items-center">
          {/* <Image src={ad.image} width="50%" height="50%" /> */}
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
      <div onClick={onClick}>
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
      <div className="flex mt-3 mb-2 items-center">
        <div className="bg-profile-available rounded-lg p-1 mr-2">
          <p className="font-mulish mx-3 text-sm">{ad.amount}st</p>
        </div>
        <div className="bg-profile-available rounded-lg p-1 mr-2">
          <p className="font-mulish mx-1 text-sm">
            {moment(ad.period.start).format("YYYY-MM-DD")} -{" "}
          </p>
        </div>
      </div>
      {/**Time of post */}
      <div className="flex">
        <p className="font-mulish text-black text-opacity-70 text-sm">
          {moment(ad.updatedAt).fromNow()}
        </p>
      </div>
    </div>
  );
}
