import React from "react";
import Link from "next/link";

export default function DropDown() {
  return (
    <div className="flex flex-col bg-background-white-color rounded-lg mt-20">
      <div className="flex flex-col items-start m-2 p-2">
        <div className="font-mulish text-xl">
          <Link href="/user-profile">Min profil</Link>
        </div>
        <div className="font-mulish text-xl">
          {" "}
          <Link href="/user-profile">Mina annonser</Link>
        </div>
        <div className="font-mulish text-xl">
          {" "}
          <Link href="/user-profile">Logga ut</Link>
        </div>
      </div>
    </div>
  );
}
