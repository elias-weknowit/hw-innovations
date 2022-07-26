import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import InformationArea from "./InformationArea";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";

export default function Footer() {
  return (
    <footer className=" flex flex-col p-3 bg-primary-color shadow md:px-6 md:py-4">
      <div className="sm:flex sm:items-center sm:justify-evenly">
        <div className="flex justify-center">
          <Image className=" rounded-lg" src={logo} width={179} height={58} />
        </div>
        <InformationArea
          Icon={BuildOutlinedIcon}
          title="Support"
          subTitle="support.hw@gmail.com"
        />
        <InformationArea
          Icon={PhoneInTalkOutlinedIcon}
          title="Har du en fråga?"
          subTitle="+468978653"
        />
        <InformationArea
          Icon={MarkunreadOutlinedIcon}
          title="Kontakta oss"
          subTitle="info.hw@gmail.com"
        />
        <p className="text-white font-mulish">© 2022, H&W Innovations</p>
      </div>

      <span className="block text-sm text-white p-3 sm:text-center dark:text-gray-400">
        Utvecklad av{" "}
        <a href="https://weknowit.se/" className="underline">
          We know IT.
        </a>
      </span>
    </footer>
  );
}
