import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3399ff",
      light: "#4dabff",
      dark: "#2979ff",
    },
    secondary: {
      main: "#00e676",
      light: "#33eb91",
      dark: "#00c853",
    },
    background: {
      default: "#0a1929",
      paper: "#0d2137",
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", monospace',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          background: "rgba(13, 33, 55, 0.7)",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});
