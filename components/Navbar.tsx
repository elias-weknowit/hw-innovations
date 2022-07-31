import React from "react";
import Image from "next/image";
import logo from "../public/Logo.svg";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center h-20 bg-primary-color mb-20">
      <div className="md:m-32">
        <Image src={logo} width={171} height={56} />
      </div>

      <div className="flex flex-row">
        <Link href={"/login"}>
          <p className="font-mulish md:mr-10 text-white cursor-pointer">Hem</p>
        </Link>
        <Link href={""}>
          <p className="font-mulish md:mr-10 text-white cursor-pointer">
            Annonser
          </p>
        </Link>
        <Link href={""}>
          <p className="font-mulish md:mr-10 text-white cursor-pointer">
            Skapa annons
          </p>
        </Link>
      </div>
      <div className="md:m-32 flex flex-row items-center">
        <div className="flex bg-black bg-opacity-40 rounded-full w-11 h-11 items-center justify-center text-white">
          img
        </div>
        <div className="flex flex-row items-center">
          <p className="font-mulish text-white text-lg m-2">Emil Emilsson</p>
          <button>
            <KeyboardArrowDownIcon
              className="w-5 h-5"
              style={{ color: "white" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
