import { Box, CircularProgress } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { logEvent } from "firebase/analytics";
import { Suspense, useEffect } from "react";
import Competence from "./components/Competence/Competence";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Formation from "./components/Formation/Formation";
import Home from "./components/Home/Home";
import { MainLayout } from "./components/Layout/MainLayout";
import Project from "./components/Projects/Projects";
import { analytics } from "./firebase";

// ✅ Importações do i18n
import './i18n';
import { initializeLanguage } from './i18n/languageInitializer';

import { theme } from "./themes/theme";

// ✅ CORREÇÃO: Imports corretos dos hooks
import { useActiveSection } from "./hooks/useActiveSection";
import { useActiveTabAnalytics } from "./hooks/useTabAnalytics";

// Componente de Loading para Suspense
const LoadingFallback = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <CircularProgress />
  </Box>
);

function App() {
  // ✅ CORREÇÃO: Usar os hooks na ordem correta
  const activeSection = useActiveSection();
  const { currentTab, deviceType, trafficSource } =
    useActiveTabAnalytics(activeSection);

  // ✅ Inicializar idioma na primeira carga
  useEffect(() => {
    initializeLanguage();
  }, []);

  // ✅ Log inicial da página
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "Portfolio Completo",
        page_location: window.location.href,
        device_type: deviceType,
        traffic_source: trafficSource,
      });

      // Log de informações do visitante
      logEvent(analytics, "profile_visitor", {
        visitor_source: trafficSource,
        device_type: deviceType,
        timestamp: new Date().toISOString(),
      });
    }
  }, [deviceType, trafficSource]);

  // ✅ Debug log (remover em produção)
  useEffect(() => {
    if (currentTab && process.env.NODE_ENV === 'development') {
      console.log(`📍 Seção ativa: ${activeSection} -> Aba: ${currentTab}`);
    }
  }, [activeSection, currentTab]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<LoadingFallback />}>
        <MainLayout>
          <Home />
          <Formation />
          <Experience />
          <Project />
          <Competence />
          <Contact />
        </MainLayout>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { theme } from "./themes/theme";
// import { MainLayout } from "./components/Layout/MainLayout";
// import Home from "./components/Home/Home";
// // import About from "./components/About/About";
// import Formation from "./components/Formation/Formation";
// import Experience from "./components/Experience/Experience";
// import Contact from "./components/Contact/Contact";
// import Project from "./components/Projects/Projects";
// import Competence from "./components/Competence/Competence";
// import { analytics } from "./firebase";
// import { useEffect } from "react";
// import { logEvent } from "firebase/analytics";

// function App() {
//   useEffect(() => {
//     logEvent(analytics, "page_view", {
//       page_title: "Portfolio Completo",
//       page_location: window.location.href,
//     });
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <MainLayout>
//         <Home />
//         <Formation />
//         <Experience />
//         <Project />
//         <Competence />
//         {/* <About /> */}
//         <Contact />
//       </MainLayout>
//     </ThemeProvider>
//   );
// }

// export default App;

// // App.tsx
// // import { ThemeProvider } from "@mui/material/styles";
// // import CssBaseline from "@mui/material/CssBaseline";
// // import { theme } from "./themes/theme";
// // import { MainLayout } from "./components/Layout/MainLayout";
// // import Home from "./components/Home/Home";
// // import Formation from "./components/Formation/Formation";
// // import Experience from "./components/Experience/Experience";
// // import Contact from "./components/Contact/Contact";
// // import Project from "./components/Projects/Projects";
// // import Competence from "./components/Competence/Competence";
// // import { analytics } from "./firebase";
// // import { useEffect } from "react";
// // import { logEvent } from "firebase/analytics";

// // // ✅ Imports dos hooks
// // import { useActiveSection } from "./hooks/useActiveSection"; // seu hook
// // import { useActiveTabAnalytics } from "./hooks/useTabAnalytics"; // novo hook

// // function App() {
// //   // ✅ Usar seus hooks
// //   const activeSection = useActiveSection();
// //   useActiveTabAnalytics(activeSection); // Rastreia automaticamente

// //   useEffect(() => {
// //     logEvent(analytics, "page_view", {
// //       page_title: "Portfolio Completo",
// //       page_location: window.location.href,
// //     });
// //   }, []);

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <MainLayout>
// //         <Home />
// //         <Formation />
// //         <Experience />
// //         <Project />
// //         <Competence />
// //         <Contact />
// //       </MainLayout>
// //     </ThemeProvider>
// //   );
// // }

// // export default App;
