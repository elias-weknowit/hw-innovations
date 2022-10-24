import { createTheme } from "@mui/material";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { AppProps } from "next/app";
import { AuthUserProvider } from "../components/firebase/AuthUserProvider";
import "../styles/globals.css";
import { initAuth, initFirebase } from "../util/firebase/init";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import moment from "moment";
import sv from "../public/sv";

moment.locale("sv", sv);

const theme = createTheme({
  palette: {
    primary: {
      main: "#8467AA",
      dark: "#4F3B89",
      light: "#BFAED5",
    },
    secondary: {
      main: "#eb363d",
      dark: "#830d12",
      light: "#f2797e",
    },
    error: { main: "#F04848" },
    warning: { main: "#F5BF00" },
    info: { main: "#4D69FF" },
    success: { main: "#23AC00" },
    grey: {
      100: "#F3F3F4",
      200: "#E7E8E9",
      300: "#CFD1D4",
      400: "#9FA3A9",
      500: "#9FA3A9",
      600: "#6F757E",
      700: "#3F4753",
      800: "#27303E",
      900: "#0F1928",
    },
    background: {
      default: "#FBFBFB",
    },
  },
  shape: { borderRadius: "5px" },
  typography: {
    fontFamily: "Mulish, sans-serif",
  },
});

initFirebase();
initAuth();

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return (
        <>
          <Navbar />
          {page}
          <Footer />
        </>
      );
    });

  //<Component {...pageProps} />
  return (
    <AuthUserProvider>
      <div className="bg-background-white-color h-24 min-h-screen">
        {getLayout(<Component {...pageProps} />)}
      </div>
    </AuthUserProvider>
  );
}
