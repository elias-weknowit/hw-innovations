import { useState } from "react";
import InputArea from "../Login/InputArea";
import LoginButton from "../Login/LoginButton";

import MailIcon from "@mui/icons-material/Mail";
import KeyIcon from "@mui/icons-material/Key";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function CreateAccountForm() {
  const [showPassword, setShowPassword] = useState(false);

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="content-center w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col flex-grow w-80 font-mulish mt-2 mb-8">
          <h1 className="justify-start font-semibold text-3xl">Skapa konto</h1>
          <p className="justify-start mt-3 text-lg">
            Hitta någon som kan hjälpa dig eller hjälpa någon med det du kan.
          </p>
        </div>
        <form className="w-full flex flex-col items-center">
          <div className="mt-3">
            <InputArea
              IconComponent={PersonIcon}
              placeholder="Namn"
              type="text"
              Password_Visibile="none"
              Password_hide="none"
              password_visibility="none"
              onClick="none"
            />
            <InputArea
              IconComponent={MailIcon}
              placeholder="E-mail"
              type="text"
              Password_Visibile="none"
              Password_hide="none"
              password_visibility="none"
              onClick="none"
            />
            <InputArea
              IconComponent={KeyIcon}
              placeholder="Lösenord"
              type={showPassword ? "text" : "password"}
              Password_hide={RemoveRedEyeIcon}
              Password_Visibile={VisibilityOffIcon}
              password_visibility={showPassword}
              onClick={passwordToggle}
            />
            <LoginButton title="Forsätt" />
          </div>
        </form>
      </div>
    </div>
  );
}
