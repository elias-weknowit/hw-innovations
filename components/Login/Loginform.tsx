import React from "react";
import Button from "./LoginButton";
import InputArea from "./InputArea";

export default function Loginform() {
  return (
    <div className="content-center w-full ">
      <div className="flex-col justify-center ">
        <h1 className="flex justify-start font-mulish font-semibold text-3xl mt-8 ml-36">
          Logga in
        </h1>
        <p className="ml-36 mt-4 mb-6 font-mulish font text-lg w-1/2">
          Hitta någon som kan hjälpa dig eller hjälpa någon med det du kan.
        </p>
        <InputArea placeholder="E-mail" type="text" />
        <InputArea placeholder="Lösenord" type="password" />
        <Button title="Logga in" />
      </div>
    </div>
  );
}
