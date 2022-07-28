import { ThemeProvider, createTheme } from "@mui/material";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";

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
    warning: { main: "#F5BF00"},
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
    }
  },
  shape:{ borderRadius: "5px" },
  typography: {
    fontFamily: "Mulish, sans-serif",
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
