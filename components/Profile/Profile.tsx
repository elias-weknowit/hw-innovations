import { User } from "firebase/auth";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/Logo.svg";
import InputForm from "../Create-Ad/components/InputForm";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import UploadImgForm from "../Create-Ad/components/UploadImgForm";
import axios from "axios";

interface ProfilProps {
  user: User | null;
  onSubmit: (formData: { user: User, image: File | null }) => void;
  onDelete: () => void;
}

export default function Profile({
  onSubmit,
  onDelete,
  user,
}: ProfilProps) {
  const [userData, setUserData] = useState<User>({ ...user });
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (file) => {
    setImage(file);
  }


  return (
    <div className="px-8 sm:px-12 md:px-16 lg:px-32">
      {user ? (
        <>
          <div className="flex flex-row h-24 mt-44 md:h-36 justify-center bg-gradient-to-r from-primary-color to-footer-pink rounded-md">
            <div className="flex items-center justify-center mt-2 rounded-full md:mt-10 bg-white h-20 w-20 md:h-20 md:w-20">
              <div className="items-center font-semibold justify-center">
                <Image alt={"Logo"} src={logo} width="100%" height="100%" />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-profile-sections md:w-full shadow-md rounded-md p-4 mt-3 mb-10">
            <form>
              <div className="flex flex-row items-center justify-around sm:justify-center">
                <InputForm
                  labelName="Namn"
                  type="text"
                  sort
                  value={userData.displayName}
                  onChange={(e) => {
                    setUserData({ ...userData, displayName: e.target.value });
                  }}
                />
                <BorderColorOutlinedIcon
                  className="w-6 h-6 ml-4 opacity-30"
                  style={{ color: "red" }}
                />
              </div>
              <div className="flex flex-row items-center justify-around sm:justify-center">
                <InputForm
                  labelName="E-mail"
                  type="text"
                  sort
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                />
                <BorderColorOutlinedIcon
                  className="w-6 h-6 ml-4 opacity-30"
                  style={{ color: "red" }}
                />
              </div>
              <div className="flex flex-row items-center justify-around sm:justify-center mt-3">
                <UploadImgForm handleSubmit={handleFileChange} />
              </div>
              <div className="flex justify-center mt-2 mb-2">
                <button className="bg-primary-color p-1 rounded-md">
                  <div
                    className="font-mulish font-semibold text-white mx-10"
                    onClick={() => onSubmit({ user: userData, image })}
                  >
                    Spara
                  </div>
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center mt-44 mb-44">
          <p className="font-mulish font-medium mb-4 text-lg">
            Logga in för att ha tillgång till din profil
          </p>
          <p className="self-center text-light-text">
            <Link href="/login">
              <a className="text-primary-color text-lg font-mulish">Logga in</a>
            </Link>
          </p>
        </div>
      )
      }
    </div >
  );
}
