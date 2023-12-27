// ThemeContext.tsx
import React, { createContext, useContext, useCallback, useState, useMemo, ReactNode, useEffect } from 'react';

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
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', String(newMode));
      return newMode;
    });
  }, []);

  // Declare the theme variable here
  const theme: Theme = useMemo(() => ({
    darkMode,
    toggleDarkMode,
    headerBackgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
    headerTextColor: darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 8%)',
    bodyBackground: darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
    bodyColor: darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
  }), [darkMode, toggleDarkMode]);


  useEffect(() => {
    // Use useMemo to memoize the themeToSave object
    const themeToSave = {
      darkMode: theme.darkMode,
      // Add other properties of the theme as needed
    };

    localStorage.setItem('theme', JSON.stringify(themeToSave));
  }, [theme]); // Include theme in the dependency array

  return <ThemeContext.Provider value={{ ...theme, darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};


export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
