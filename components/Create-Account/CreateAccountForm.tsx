import { Button } from "@mui/material";
import React from "react";
import InputArea from "../Login/InputArea";
import LoginButton from "../Login/LoginButton";

import MailIcon from "@mui/icons-material/Mail";
import KeyIcon from "@mui/icons-material/Key";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonIcon from "@mui/icons-material/Person";

export default function CreateAccountForm() {
  return (
    <div className="content-center w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col flex-grow w-80 font-mulish mt-2 mb-8">
          <h1 className="justify-start font-semibold text-3xl">Skapa konto</h1>
          <p className="justify-start mt-3 text-lg">
            Hitta någon som kan hjälpa dig eller hjälpa någon med det du kan.
          </p>
        </div>
        <div className="mt-3 w-full flex flex-col items-center">
          <InputArea
            IconComponent={PersonIcon}
            placeholder="Namn"
            type="text"
            HidePassword="none"
          />
          <InputArea
            IconComponent={MailIcon}
            placeholder="E-mail"
            type="text"
            HidePassword="none"
          />
          <InputArea
            IconComponent={KeyIcon}
            placeholder="Password"
            type="password"
            HidePassword={RemoveRedEyeIcon}
          />
          <LoginButton title="Forsätt" />
        </div>
      </div>
    </div>
  );
}
