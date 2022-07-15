import { getAuth } from "firebase/auth";
import FirebaseProvider from "../components/FirebaseProvider";
import InputArea from "../components/InputArea";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center bg-gray-200 w-full p-2 rounded-lg">
        <div>
          <InputArea placeholder="Skriv ditt email här" type="text" />
          <InputArea placeholder="Skriv in ditt lösenord" type="text" />
          <button>Logga in</button>
        </div>
      </div>
      <FirebaseProvider />
    </div>
  );
}
