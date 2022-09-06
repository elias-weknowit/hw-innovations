import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { User } from "firebase/auth";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../firebase/AuthUserProvider";

interface ProfilePreviewProps {
  user: User | null;
  image: string | StaticImageData;
}

export default function ProfilePreview({ user, image }: ProfilePreviewProps) {
  const { signOut } = useAuth();
  const router = useRouter();
  return (
    <div className="flex flex-row items-center p-2 justify-self-end">
      {user ? (
        <>
          <div className="flex bg-black bg-opacity-40 rounded-full  w-12 h-12 items-center justify-center text-white overflow-hidden">
            <Image alt="Profile" src={image} width="100%" height="100%" />
          </div>
          <div className="flex flex-row items-center">
            <Link href="/profile">
              <a className="font-mulish text-white text-lg m-2">
                {user.displayName}
              </a>
            </Link>
            <button
              onClick={() => {
                signOut();
                router.push("/login");
              }}
            >
              <KeyboardArrowDownIcon
                className="w-5 h-5"
                style={{ color: "white" }}
              />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row items-center">
            <Link href="/login">
              <a className="font-mulish text-white text-lg md:p-1">Logga in</a>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
