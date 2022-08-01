import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { User } from "firebase/auth";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useAuth } from "../firebase/AuthUserProvider";


interface ProfilePreviewProps {
    user: User | null;
    image: StaticImageData;
}

export default function ProfilePreview({user, image}: ProfilePreviewProps) {
    const { signOut } = useAuth();
    return (
        <div className="md:m-32 flex flex-row items-center justify-self-end">
            {user ?
            <>
                <div className="flex bg-black bg-opacity-40 rounded-full w-11 h-11 items-center justify-center text-white overflow-hidden">
                    <Image src={image} width="100%" height="100%" />
                </div>
                <div className="flex flex-row items-center">
                    <Link href="/user-profile">
                        <a className="font-mulish text-white text-lg m-2">
                            {user.email}
                        </a>
                    </Link>
                    <button onClick={signOut}>
                        <KeyboardArrowDownIcon className="w-5 h-5" style={{ color: "white" }}/>
                    </button>
                </div>
            </>
            :
            <>
                <div className="flex flex-row items-center">
                    <Link href="/login">
                        <a className="font-mulish text-white text-lg m-2">
                            Logga in
                        </a>
                    </Link>
                </div>
            </>
            }
            
            
        </div>
    )
}