import React, { useState } from "react";
import LoginButton from "./LoginButton";
import InputArea from "./InputArea";
import MailIcon from "@mui/icons-material/Mail";
import KeyIcon from "@mui/icons-material/Key";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Password } from "@mui/icons-material";
import { LoginError } from "../../pages/login";

export default function Loginform({error, onSubmit}: {error: LoginError | null, onSubmit: (formData: {user: string, password: string}) => void}) {
  const [showPassword, setShowPassword] = useState(false);

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className="content-center w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col flex-grow w-80 font-mulish mt-2 mb-4">
          <h1 className="justify-start font-semibold text-3xl">Logga in</h1>
          <p className="justify-start mt-3 text-lg">
            Hitta någon som kan hjälpa dig eller hjälpa någon med det du kan.
          </p>
        </div>
        <form className="w-full flex flex-col items-center" onSubmit={e => e.preventDefault()}>
          <div className="mt-3">
            <InputArea
              IconComponent={MailIcon}
              placeholder="E-mail"
              type="text"
              error={error?.type === "email" || error?.type === "both"}
              errorMessage={error?.message}
              onChange={email => handleEmailChange(email)}
            />
            <InputArea
              IconComponent={KeyIcon}
              placeholder="Lösenord"
              type={showPassword ? "text" : "password"}
              Password_hide={RemoveRedEyeIcon}
              Password_Visibile={VisibilityOffIcon}
              password_visibility={showPassword}
              onClick={passwordToggle}
              error={error?.type === "password" || error?.type === "both"}
              errorMessage={error?.message}
              onChange={password => handlePasswordChange(password)}
              />
            <LoginButton onClick={() => onSubmit({user: email, password})} title="Logga in" />
          </div>
        </form>
      </div>
    </div>
  );
}
