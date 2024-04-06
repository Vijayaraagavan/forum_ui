import {
  useColorMode,
  extendTheme,
  ChakraProvider,
  CSSReset,
} from "@chakra-ui/react";
import React, { useEffect, useState, createContext, useContext } from "react";
import dark from "./dark";
import light from "./light";

export const ThemeContext = createContext();
export function ThemeProvider({ children, ...props }) {
    const def = localStorage.getItem('theme') == 'dark' ? dark : light;
    const [current, setCurrent] = useState(localStorage.getItem('theme'));
    console.log(def, current)
  const [theme, setTheme] = useState(def);
  const extended = extendTheme(theme);
  const toggleTheme = () => {
    setTheme((v) => {
        if (v == dark) {
            setCurrent('light')
            localStorage.setItem('theme', 'light');
            return light;
        } else {
            setCurrent('dark')
            localStorage.setItem('theme', 'dark');
            return dark;
        }
    } );
  };
  console.log('reload')
  return (
    <ThemeContext.Provider value={{ theme: extended, toggleTheme, current: current }}>
      <ChakraProvider theme={extended}>
        <CSSReset />
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { ...props })
        )}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
}

