import React from "react";
import InputArea from "../../components/Login/InputArea";
import { LandingImg } from "../login/landingImg";

export default function Login() {
  return (
    <div className="flex bg-slate-100">
      <div className="justify-center">
        <div>
          <InputArea placeholder="Skriv ditt email här" type="text" />
          <InputArea placeholder="Skriv in ditt lösenord" type="password" />
        </div>
      </div>
    </div>
  );
}
