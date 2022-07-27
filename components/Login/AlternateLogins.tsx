import { IconButton, SvgIcon } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";

export default function AlternateLogins({
  className = "",
  enableApple = false,
  enableGoogle = false,
  enableFacebook = false,
  enableMail = false,
}) {
  return (
    <div className={className}>
      <div className="flex flex-row justify-evenly ">
        {enableGoogle && (
          <IconButton className="bg-white drop-shadow" size="large">
            <Link href="/">
              <SvgIcon component={AppleIcon} inheritViewBox />
            </Link>
          </IconButton>
        )}
        {enableApple && (
          <IconButton className="bg-white drop-shadow" size="large">
            <Link href="/">
              <SvgIcon component={GoogleIcon} inheritViewBox />
            </Link>
          </IconButton>
        )}
        {enableFacebook && (
          <IconButton className="bg-white drop-shadow" size="large">
            <Link href="/">
              <SvgIcon component={FacebookIcon} inheritViewBox />
            </Link>
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