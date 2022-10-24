import { useState } from "react";
import InputArea from "../Login/InputArea";
import LoginButton from "../Login/LoginButton";
import UploadImgForm from "../Create-Ad/components/UploadImgForm";

import SignpostSharpIcon from "@mui/icons-material/SignpostSharp";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import KeyIcon from "@mui/icons-material/Key";
import TagIcon from "@mui/icons-material/Tag";

import { useAuth } from "../../components/firebase/AuthUserProvider";
import { useRouter } from "next/router";
import { deleteUser } from "firebase/auth";
import { display } from "@mui/system";

type CreateAccountError = {
  message: string;
  fields: ("email" | "password" | "displayName")[];
};

export default function CreateAccountForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<CreateAccountError | null>(null);
  const [image, setImage] = useState<FormData | null>(null);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  /* handleFileChange must be passed to UploadImgForm Component */
  const handleFileChange = (file) => {
    setImage(file);
    console.log(file);
  }

  const { createUserWithEmailAndPassword, updateProfile } = useAuth();

  return (
    <div className="content-center w-full">
      <div className="flex flex-col items-center">
        <form
          className="w-full flex flex-col items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mt-3">
            <InputArea
              IconComponent={WorkIcon}
              placeholder="Företag"
              type="text"
              onChange={null}
              error={null}
              errorMessage={null}
            />
            <InputArea
              IconComponent={PersonIcon}
              placeholder="Fullständigt namn"
              type="text"
              onChange={(userName) => handleUserNameChange(userName)}
              error={error?.fields.includes("displayName")}
              errorMessage={error?.message}
            />
            <InputArea
              IconComponent={MailIcon}
              placeholder="E-mail"
              type="text"
              onChange={(mail) => handleEmailChange(mail)}
              error={error?.fields.includes("email")}
              errorMessage={error?.message}
            />
            <InputArea
              IconComponent={KeyIcon}
              placeholder="Lösenord"
              type={showPassword ? "text" : "password"}
              Password_hide={RemoveRedEyeIcon}
              Password_Visibile={VisibilityOffIcon}
              password_visibility={showPassword}
              onClick={passwordToggle}
              onChange={(password) => handlePasswordChange(password)}
              error={error?.fields.includes("password")}
              errorMessage={error?.message}
              valid_user={password.length >= 6}
            />
            <InputArea
              IconComponent={LocalPhoneIcon}
              placeholder="Telefon"
              type="text"
              onChange={null}
              error={null}
              errorMessage={null}
            />
            <InputArea
              IconComponent={TagIcon}
              placeholder="Organisationsnummer"
              type="text"
              onChange={null}
              error={null}
              errorMessage={null}
            />
            <InputArea
              IconComponent={RoomSharpIcon}
              placeholder="Adress"
              type="text"
              onChange={null}
              error={null}
              errorMessage={null}
            />
            <InputArea
              IconComponent={SignpostSharpIcon}
              placeholder="Postnummer"
              type="text"
              onChange={null}
              error={null}
              errorMessage={null}
            />
            <InputArea
              IconComponent={ApartmentSharpIcon}
              placeholder="Ort"
              type="text"
              onChange={null}
              error={null}
              errorMessage={null}
            />
            <UploadImgForm
              handleSubmit={handleFileChange} />
            <LoginButton onClick={null} title="Skapa" />
          </div>
        </form>
      </div>
    </div>
  );
}
