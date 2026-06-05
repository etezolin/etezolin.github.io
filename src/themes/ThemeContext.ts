import { createContext, useContext } from 'react';
import { type ThemeMode } from './theme';

export interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggleMode: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);
