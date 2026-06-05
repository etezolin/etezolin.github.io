import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React, { useCallback, useState } from 'react';
import { createAppTheme, type ThemeMode } from './theme';
import { ThemeContext } from './ThemeContext';

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('portfolio-theme-mode');
    return saved === 'light' ? 'light' : 'dark';
  });

  // const [mode, setMode] = useState<ThemeMode>(() => {
  //   const saved = localStorage.getItem('portfolio-theme-mode');
  //   return saved === 'dark' ? 'dark' : 'light';
  // });

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme-mode', next);
      return next;
    });
  }, []);

  const appTheme = createAppTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
