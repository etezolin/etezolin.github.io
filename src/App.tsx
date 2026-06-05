import { Box, CircularProgress } from '@mui/material';
import { logEvent } from 'firebase/analytics';
import { Suspense, useEffect } from 'react';
import { MainLayout } from './components/Layout/MainLayout';
import { analytics } from './firebase';
import Competence from './pages/Competence/Competence';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';
import Formation from './pages/Formation/Formation';
import Home from './pages/Home/Home';
import Project from './pages/Projects/Projects';

// ✅ Importações do i18n
import './i18n';
import { initializeLanguage } from './i18n/languageInitializer';

import { AppThemeProvider } from './themes/AppThemeProvider';

// ✅ CORREÇÃO: Imports corretos dos hooks
import { useActiveSection } from './hooks/useActiveSection';
import { useActiveTabAnalytics } from './hooks/useTabAnalytics';

// Componente de Loading para Suspense
const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);

function App() {
  // ✅ CORREÇÃO: Usar os hooks na ordem correta
  const activeSection = useActiveSection();
  const { deviceType, trafficSource } = useActiveTabAnalytics(activeSection);

  // ✅ Inicializar idioma na primeira carga
  useEffect(() => {
    initializeLanguage();
  }, []);

  // ✅ Log inicial da página
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: 'Portfolio Completo',
        page_location: window.location.href,
        device_type: deviceType,
        traffic_source: trafficSource,
      });

      // Log de informações do visitante
      logEvent(analytics, 'profile_visitor', {
        visitor_source: trafficSource,
        device_type: deviceType,
        timestamp: new Date().toISOString(),
      });
    }
  }, [deviceType, trafficSource]);

  return (
    <AppThemeProvider>
      <Suspense fallback={<LoadingFallback />}>
        <Box sx={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
          <MainLayout>
            <Home />
            <Formation />
            <Experience />
            <Project />
            <Competence />
            <Contact />
          </MainLayout>
        </Box>
      </Suspense>
    </AppThemeProvider>
  );
}

export default App;
