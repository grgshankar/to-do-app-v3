import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("Theme should be called inside ThemeContextProvider");
  return context;
};
