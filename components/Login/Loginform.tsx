import React from "react";
import Button from "./LoginButton";
import InputArea from "./InputArea";
import MailIcon from "@mui/icons-material/Mail";
import KeyIcon from '@mui/icons-material/Key';

export default function Loginform() {
  return (
    <div className="content-center w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col flex-grow w-80 font-mulish mt-2 mb-4">
          <h1 className="justify-start font-semibold text-3xl">Logga in</h1>
          <p className="justify-start mt-3 text-lg">
            Hitta någon som kan hjälpa dig eller hjälpa någon med det du kan.
          </p>
        </div>
        <div className="mt-3 w-full flex flex-col items-center">
          <InputArea IconComponent={MailIcon} placeholder="E-mail" type="text" />
          <InputArea IconComponent={KeyIcon} placeholder="Lösenord" type="password" />
          <Button title="Logga in" />
        </div>
      </div>
    </div>
  );
}
