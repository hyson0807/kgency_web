import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { theme, darkTheme } from './theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  currentTheme: typeof theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const mode: ThemeMode = 'dark'; // 다크모드로 고정

  const toggleTheme = () => {
    // 테마 전환 비활성화 - 다크모드 고정
  };

  const currentTheme = mode === 'light' ? theme : {
    ...theme,
    colors: {
      ...theme.colors,
      surfaces: darkTheme.colors.surfaces,
      text: darkTheme.colors.text,
      border: darkTheme.colors.border,
    }
  };

  // Apply theme to body
  React.useEffect(() => {
    document.body.style.backgroundColor = currentTheme.colors.surfaces.background;
    document.body.style.color = currentTheme.colors.text.primary;
  }, [currentTheme, mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};