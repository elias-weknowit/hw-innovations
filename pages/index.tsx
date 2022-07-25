import { getAuth } from "firebase/auth";
import FirebaseProvider from "../components/firebase/FirebaseProvider";
import InputArea from "../components/Login/InputArea";
import LoginView from "./login/LoginView";

export default function Home() {
  return (
    <>
      <LoginView />
    </>
  );
}
