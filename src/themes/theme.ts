import { alpha, createTheme } from "@mui/material/styles";

export type ThemeMode = "light" | "dark";

export const createAppTheme = (mode: ThemeMode) => {
  const isDark = mode === "dark";

  const primaryMain = isDark ? "#3399ff" : "#2563eb";
  const primaryLight = isDark ? "#4dabff" : "#60a5fa";
  const primaryDark = isDark ? "#2979ff" : "#1d4ed8";
  const secondaryMain = isDark ? "#00e676" : "#059669";
  const bgDefault = isDark ? "#060e1c" : "#f0f4f8";
  const bgPaper = isDark ? "#0d2137" : "#ffffff";

  return createTheme({
    palette: {
      mode,
      primary: { main: primaryMain, light: primaryLight, dark: primaryDark },
      secondary: {
        main: secondaryMain,
        light: isDark ? "#33eb91" : "#34d399",
        dark: isDark ? "#00c853" : "#047857",
      },
      background: { default: bgDefault, paper: bgPaper },
      text: {
        primary: isDark ? "#f0f0f0" : "#0f172a",
        secondary: isDark ? "rgba(240,240,240,0.55)" : "rgba(15,23,42,0.55)",
      },
    },
    typography: {
      fontFamily: '"Roboto Mono", monospace',
      h1: { fontSize: "2.5rem", fontWeight: 600 },
      h2: { fontSize: "2rem", fontWeight: 500 },
      body1: { fontSize: "1rem", lineHeight: 1.7 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "html, body, #root": { minHeight: "100vh", width: "100%" },
          "body, .css-37z01r, .css-37z01c": {
            backgroundColor: `${bgDefault} !important`,
            backgroundAttachment: "fixed",
            position: "relative",
            background: bgDefault,
            "&::before": {
              content: '""',
              position: "fixed",
              top: 0, left: 0, width: "100%", height: "100%",
              zIndex: -1,
              backgroundImage: `radial-gradient(circle at 1px 1px, ${alpha(primaryMain, isDark ? 0.1 : 0.07)} 1px, transparent 0)`,
              backgroundSize: "28px 28px",
              pointerEvents: "none",
            },
            "&::after": {
              content: '""',
              position: "fixed",
              top: 0, left: 0, width: "100%", height: "100%",
              zIndex: -2,
              backgroundImage: isDark
                ? `radial-gradient(ellipse at 15% 15%, rgba(51,153,255,0.07) 0%, transparent 45%),
                   radial-gradient(ellipse at 85% 85%, rgba(0,230,118,0.04) 0%, transparent 45%),
                   radial-gradient(ellipse at 50% 0%, rgba(51,153,255,0.05) 0%, transparent 40%)`
                : `radial-gradient(ellipse at 15% 15%, rgba(37,99,235,0.05) 0%, transparent 45%),
                   radial-gradient(ellipse at 85% 85%, rgba(5,150,105,0.04) 0%, transparent 45%)`,
              pointerEvents: "none",
            },
          },
        },
      },
      MuiButton: { styleOverrides: { root: { borderRadius: 8, textTransform: "none" } } },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            background: isDark ? "rgba(8, 20, 40, 0.82)" : "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${isDark ? "rgba(51,153,255,0.08)" : "rgba(37,99,235,0.1)"}`,
            boxShadow: isDark
              ? "0 8px 32px rgba(0,0,0,0.3)"
              : "0 4px 24px rgba(15,23,42,0.08)",
          },
        },
      },
    },
  });
};

export const theme = createAppTheme("dark");
