import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/Logo.svg";
import Link from "next/link";
import { useAuth } from "../../components/firebase/AuthUserProvider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DropDown from "./DropDown";

export default function Navbar({
  transparent,
  hideButton,
}: {
  transparent?: boolean;
  hideButton?: boolean;
}) {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        "md:flex md:flex-row justify-evenly items-center  h-20 w-full flex-wrap " +
        (transparent ? "" : "bg-primary-color shadow-lg ")
      }
    >
      <div className="flex flex-row items-center flex-shrink-0">
        <div className="flex items-center md:items-start md:justify-start justify-start p-2">
          <Image alt={"Logo"} src={logo} width={171} height={56} />
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
        className={`md:flex md:p-1 md:flex-row w-full md:w-auto translate-all ease-in ${
          open
            ? "flex flex-col items-center mt-1 w-full " +
              (transparent ? "" : "bg-primary-color")
            : "flex flex-col items-center mt-1 md:opacity-100 w-full opacity-0	"
        }`}
      >
        <Link href={"/"}>
          <p className="font-mulish md:mr-10 text-white cursor-pointer  ">
            Hem
          </p>
        </Link>
        <Link href={"/job"}>
          <p className="font-mulish mt-1 mb-1 md:mr-10 text-white cursor-pointer ">
            Annonser
          </p>
        </Link>
      </div>
      <div
        className={`md:flex md:flex-row md:z-auto w-full md:w-auto translate-all ease-in ${
          open
            ? "flex flex-col items-center w-full " +
              (transparent ? "" : "bg-primary-color")
            : "flex flex-col items-center md:opacity-100 w-full opacity-0	"
        }`}
      >
        {user ? (
          <>
            <div
              className={
                "text-primary-color font-mulish font-semibold text-lg  md:mr-5 " +
                (hideButton ? "hidden" : "")
              }
            >
              <div className="bg-profile-available p-1 md:p-2 rounded-md ">
                <button className="flex flex-row items-center">
                  <AddCircleIcon className="w-6 h-6 mr-2" />
                  <Link href={"/ad"}>Skapa annons </Link>
                </button>
              </div>
            </div>
            <div>
              <DropDown
                user={user}
                image={user?.photoURL ? user.photoURL : logo}
              />
            </div>
          </>
        ) : (
          <div>
            <DropDown
              user={user}
              image={user?.photoURL ? user.photoURL : logo}
            />
          </div>
        )}
      </div>
    </div>
  );
}
