import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import Link from "next/link";


interface ProfilePreviewProps {
    name: string;
    image: string;
}

export default function ProfilePreview({name, image}) {
    return (
        <div className="md:m-32 flex flex-row items-center">
            <div className="flex bg-black bg-opacity-40 rounded-full w-11 h-11 items-center justify-center text-white overflow-hidden">
                <Image src={image} width="100%" height="100%" />
            </div>
            <div className="flex flex-row items-center">
            <button className="flex flex-row  items-center">
                <p className="font-mulish text-white text-lg m-2">{name}</p>
                <KeyboardArrowDownIcon className="w-5 h-5" style={{ color: "white" }}/>
            </button>
            </div>
        </div>
    )
}