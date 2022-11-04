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
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import axios from "axios";

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
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [orgNumber, setOrgNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  const [error, setError] = useState<CreateAccountError | null>(null);
  const [image, setImage] = useState<File | null>(null);

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
  };

  const handleOrgNrChange = (event) => {
    setOrgNumber(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  /* handleFileChange must be passed to UploadImgForm Component */
  const handleFileChange = (file) => {
    setImage(file);
  }

  const uploadProfilePicture = async (file: File, userId: string) => {
    const storage = getStorage();

    const storageRef = ref(storage, `images/profilePictures/${userId}.jpg`);
    const res = await uploadBytes(storageRef, file).then((snapshot) => {
      //Get download URL and update pictureURL paramater in user
      getDownloadURL(storageRef).then((url) => {
        updateProfile({ photoURL: url });
        axios.put("/api/users", { photoURL: url });
      });
      ;
    }).catch((error) => { return 500 });
  };

  const { createUserWithEmailAndPassword, updateProfile, deleteUser } = useAuth();

  const onSubmit = async (formData: {
    user: string;
    password: string;
    displayName: string;
    image: File | null;
  }) => {
    createUserWithEmailAndPassword(formData.user, formData.password)
      .then((result) => {
        //Update display name and assign link to default profile picture (Link and access token can be found in firebase console in storage)
        updateProfile({
          displayName: formData.displayName,
          photoURL: "https://firebasestorage.googleapis.com/v0/b/hw-innovations.appspot.com/o/images%2FprofilePictures%2FdefaultPicture.JPG?alt=media&token=4a44000c-f2bc-4edb-a0f3-35cf907a1fb0"
        },
          result.user)
          .then(() => {
            result.user.getIdToken().then(idToken => {
              axios.post("/api/session/", { idToken }).then(() => {
                return axios.post("/api/users/", { name: formData.displayName, email: formData.user })
                  .then(() => {
                    if (formData.image) {
                      uploadProfilePicture(formData.image, result.user.uid);
                    }
                  })
              }).catch(() => {
                deleteUser();
                setError({
                  message: "Något gick fel. Försök igen senare.",
                  fields: ["displayName"],
                });
              })
            })
            router.push("/");
          })
          .catch((error) => {
            deleteUser();
            setError({
              message: "Något gick fel vid sättning av namn.",
              fields: ["displayName"],
            });
          })
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setError({
              message: "E-postadressen används redan.",
              fields: ["email"],
            });
            break;
          case "auth/invalid-email":
            setError({
              message: "E-postadressen är ogiltig.",
              fields: ["email"],
            });
            break;
          case "auth/weak-password":
            setError({
              message: "Lösenordet måste vara minst 6 tecken.",
              fields: ["password"],
            });
            break;
          default:
            setError({
              message: "Något gick fel.",
              fields: ["email", "password", "displayName"],
            });
        }
      });
  };

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
              onChange={(e) => handleCompanyNameChange(e)}
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
              onChange={(phone) => handlePhoneChange(phone)}
              error={null}
              errorMessage={null}
            />
            <InputArea
              IconComponent={TagIcon}
              placeholder="Organisationsnummer"
              type="text"
              onChange={(orgNumber) => handleOrgNrChange(orgNumber)}
              error={null}
              errorMessage={null}
            />
            <InputArea
              IconComponent={RoomSharpIcon}
              placeholder="Adress"
              type="text"
              onChange={(address) => handleAddressChange(address)}
              error={null}
              errorMessage={null}
            />
            <InputArea
              IconComponent={SignpostSharpIcon}
              placeholder="Postnummer"
              type="text"
              onChange={(postalCode) => handlePostalCodeChange(postalCode)}
              error={null}
              errorMessage={null}
            />
            <InputArea
              IconComponent={ApartmentSharpIcon}
              placeholder="Ort"
              type="text"
              onChange={(city) => handleCityChange(city)}
              error={null}
              errorMessage={null}
            />
            <UploadImgForm
              handleSubmit={handleFileChange} />
            <LoginButton
              onClick={() =>
                onSubmit({ user: email, password, displayName: userName, image: image })
              }
              title="Skapa" />
          </div>
        </form>
      </div>
    </div>
  );
}
