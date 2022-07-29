import LoginView from "./login";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/login">
        <button>Hej</button>
      </Link>
    </>
    
  );
}
