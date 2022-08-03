import { IconButton, SvgIcon } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useAuth } from "../../components/firebase/AuthUserProvider";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AlternateLogins({
  className = "",
  enableApple = false,
  enableGoogle = false,
  enableFacebook = false,
  enableMail = false,
}) {
  const router = useRouter();
  const { signInWithGoogleRedirect } = useAuth();

  return (
    <div className={className}>
      <div className="flex flex-row justify-evenly ">
        {enableApple && (
          <IconButton className="bg-white drop-shadow" size="large" >
              <SvgIcon component={AppleIcon} inheritViewBox />
          </IconButton>
        )}
        {enableGoogle && (
          <IconButton className="bg-white drop-shadow" size="large" onClick={() => {router.push('/login'); signInWithGoogleRedirect();}}>
              <SvgIcon component={GoogleIcon} inheritViewBox />
          </IconButton>
        )}
        {enableFacebook && (
          <IconButton className="bg-white drop-shadow" size="large">
              <SvgIcon component={FacebookIcon} inheritViewBox />
          </IconButton>
        )}
        {enableMail && (
          <IconButton className="bg-white drop-shadow" size="large">
            <Link href="/">
              <MailIcon inheritViewBox />
            </Link>
          </IconButton>
        )}
      </div>
    </div>
  );
}
