import { useState } from "react";
import InputArea from "../Login/InputArea";
import LoginButton from "../Login/LoginButton";

import MailIcon from "@mui/icons-material/Mail";
import KeyIcon from "@mui/icons-material/Key";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useAuth } from "../../components/firebase/AuthUserProvider";

export default function CreateAccountForm() {
  const [showPassword, setShowPassword] = useState(false);

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  }

  const { createUserWithEmailAndPassword, updateProfile } = useAuth();
  
  const onSubmit = (formData: {user: string, password: string, displayName: string}) => {
    createUserWithEmailAndPassword(formData.user, formData.password)
      .then( userCredential => updateProfile({displayName: formData.displayName}, userCredential.user))
      .catch(console.log);
  }

  return (
    <div className="content-center w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col flex-grow w-80 font-mulish mt-2 mb-8">
          <h1 className="justify-start font-semibold text-3xl">Skapa konto</h1>
          <p className="justify-start mt-3 text-lg">
            Hitta någon som kan hjälpa dig eller hjälpa någon med det du kan.
          </p>
        </div>
        <form className="w-full flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
          <div className="mt-3">
            <InputArea
              IconComponent={PersonIcon}
              placeholder="Namn"
              type="text"
              onChange={userName => handleUserNameChange(userName)}
            />
            <InputArea
              IconComponent={MailIcon}
              placeholder="E-mail"
              type="text"
              onChange={mail => handleEmailChange(mail)}
            />
            <InputArea
              IconComponent={KeyIcon}
              placeholder="Lösenord"
              type={showPassword ? "text" : "password"}
              Password_hide={RemoveRedEyeIcon}
              Password_Visibile={VisibilityOffIcon}
              password_visibility={showPassword}
              onClick={passwordToggle}
              onChange={password => handlePasswordChange(password)}
            />
            <LoginButton onClick={() => onSubmit({user: email, password, displayName: userName})} title="Forsätt" />
          </div>
        </form>
      </div>
    </div>
  );
}
