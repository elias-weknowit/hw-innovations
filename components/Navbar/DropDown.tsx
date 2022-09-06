import React, { useEffect, useReducer, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image, { StaticImageData } from "next/image";
import { User } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../firebase/AuthUserProvider";
import Link from "next/link";

interface DropDownProps {
  user: User | null;
  image: string | StaticImageData;
}

export default function DropDown({ user, image }: DropDownProps) {
  const [showOptions, setShowOptions] = useState(false);
  const { signOut } = useAuth();
  const router = useRouter();
  let domNode = useRef();

  useEffect(() => {
    const closeWhenClickOutside = (e) => {
      if (e.path[0] !== domNode.current) {
        setShowOptions(false);
      }
    };
    document.body.addEventListener("click", closeWhenClickOutside);

    return () => {
      document.body.removeEventListener("click", closeWhenClickOutside);
    };
  });

  return (
    <>
      <div>
        {user ? (
          <div className="relative inline-block text-left">
            <div>
              <button
                ref={domNode}
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
                type="button"
                className="inline-flex items-center justify-center w-full rounded-md px-4 py-2 text-white bg-opacity-0 font-mulish text-lg text-gray-700 focus:outline-none"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <div className="flex bg-black bg-opacity-40 rounded-full w-12 h-12 items-center justify-center text-white overflow-hidden">
                  <Image alt="Profile" src={image} width="100%" height="100%" />
                </div>
                <p className="font-mulish ml-5">{user.displayName}</p>

                <KeyboardArrowDownIcon className="h-5 w-5 ml-2" />
              </button>
            </div>

            {showOptions && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <Link href="/profile">
                    <a
                      className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                      role="menuitem"
                      id="menu-item-2"
                    >
                      Mitt konto
                    </a>
                  </Link>
                  <Link href="/ad">
                    <a
                      className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                      role="menuitem"
                      id="menu-item-2"
                    >
                      Mina Annonser
                    </a>
                  </Link>
                  

                  <a
                    onClick={() => {
                      signOut();
                      router.push("/");
                    }}
                    className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                    role="menuitem"
                    id="menu-item-2"
                  >
                    Logga ut
                  </a>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-row items-center">
            <Link href="/login">
              <a className="font-mulish text-white text-lg md:p-1">Logga in</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );

  /*<div className="flex flex-col bg-background-white-color rounded-lg mt-20">
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
    
    
  */
}
