"use strict";

import React, { useEffect, useState, createContext, useContext } from "react";

let Theme = "light";
let ThemeContextType = {
    theme: Theme,
    toggleTheme: () => toggleTheme()
};

let ThemeContext = createContext(ThemeContextType);

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");

        if (localTheme) {
            setTheme(localTheme);

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
export function useTheme() {
    const context = useContext(ThemeContext);
    console.log(context)

    if (!context) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}
