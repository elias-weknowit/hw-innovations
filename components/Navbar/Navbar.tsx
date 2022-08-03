import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/Logo.svg";
import Link from "next/link";
import ProfilePreview from "./ProfilePreview";
import LoginImg from "../../public/LoginImg.png";
import { useAuth } from "../../components/firebase/AuthUserProvider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar({ transparent }: { transparent?: boolean }) {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        "md:flex md:flex-row justify-between items-center h-20 w-full " +
        (transparent ? "" : "bg-primary-color shadow-lg")
      }
    >
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-start p-1 md:m-32">
          <Image src={logo} width={171} height={56} />
        </div>
        <div
          className="flex flex-row items-center"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <CloseIcon
              className="w-10 h-10 absolute right-3 cursor-pointer md:hidden"
              style={{ color: "white" }}
            />
          ) : (
            <MenuIcon
              className="w-10 h-10 absolute right-3 cursor-pointer md:hidden"
              style={{ color: "white" }}
            />
          )}
        </div>
      </div>
      <div
        className={`md:flex md:flex-row md:z-auto w-full md:w-auto translate-all duration-300 ease-in ${
          open
            ? "flex flex-col items-center  mt-1 w-full"
            : "flex flex-col items-center mt-1 md:opacity-100 w-full opacity-0"
        }`}
      >
        <Link href={"/login"}>
          <p className="font-mulish md:mr-10 text-white cursor-pointer  ">
            Hem
          </p>
        </Link>
        <Link href={""}>
          <p className="font-mulish md:mr-10 text-white cursor-pointer ">
            Annonser
          </p>
        </Link>
        <Link href={""}>
          <p className="font-mulish md:mr-10 text-white cursor-pointer ">
            Skapa annons
          </p>
        </Link>
      </div>
      <div
        className={`md:flex md:flex-row md:z-auto w-full md:w-auto translate-all duration-300 ease-in ${
          open
            ? "flex flex-col items-center w-full "
            : "flex flex-col items-center md:opacity-100 w-full  opacity-0 "
        }`}
      >
        <ProfilePreview user={user} image={LoginImg} />
      </div>
    </div>
  );
}
