import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./themes/theme";
import { MainLayout } from "./components/Layout/MainLayout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Formation from "./components/Formation/Formation";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Projects";
import { analytics } from "./firebase";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";

function App() {
  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_title: "Portfolio Completo",
      page_location: window.location.href,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Home />
        <About />
        <Formation />
        <Experience />
        <Project />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
