import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isLightTheme: boolean;
  switchTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    
  const getInitialTheme = () => localStorage.getItem("theme") === "light";

  const [isLightTheme, setIsLightTheme] = useState(getInitialTheme);

  useEffect(() => {
    const theme = isLightTheme ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isLightTheme]);

  function switchTheme() {
    setIsLightTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
