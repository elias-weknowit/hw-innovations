import React from "react";
import Image from "next/image";
import logo from "../../public/Logo.svg";
import Link from "next/link";
import ProfilePreview from "./ProfilePreview";
import LoginImg from "../../public/LoginImg.png";
import { useAuth } from "../../components/firebase/AuthUserProvider";

export default function Navbar({ transparent }: { transparent?: boolean }) {
  const { user } = useAuth();

  return (
    <div
      className={
        "flex flex-row justify-between items-center h-20 " +
        (transparent ? "" : "bg-primary-color")
      }
    >
      <div className="md:m-32">
        <Image alt={"Logo"} src={logo} width={171} height={56} />
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
      <ProfilePreview user={user} image={user?.photoURL ? user.photoURL : logo} />
    </div>
  );
}
