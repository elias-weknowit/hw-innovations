import { getAuth } from "firebase/auth";
import FirebaseProvider from "../components/firebase/FirebaseProvider";
import InputArea from "../components/Login/InputArea";
import Login from "./login/Login";

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
