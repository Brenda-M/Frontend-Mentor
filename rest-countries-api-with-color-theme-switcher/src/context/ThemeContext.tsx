// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ThemeContextProps {
  children: ReactNode;
}

interface Theme {
  darkMode: boolean;
  toggleDarkMode: () => void;
  headerBackgroundColor: string;
  headerTextColor: string;
  bodyBackground: string;
  bodyColor: string;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  // Retrieve the user's preference from localStorage on initial load
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the user's preference to localStorage
      localStorage.setItem('darkMode', String(newMode));
      return newMode;
    });
  };

  // Declare the theme variable here
  const theme: Theme = {
    darkMode,
    toggleDarkMode,
    headerBackgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
    headerTextColor: darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 8%)',
    bodyBackground: darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
    bodyColor: darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
  };

  useEffect(() => {
    // Update the theme when darkMode changes
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [darkMode]);

  return <ThemeContext.Provider value={{ ...theme, darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
