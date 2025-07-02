import { createContext, useEffect, useState } from "react";

import type { Theme, ThemeContextProps } from "@/types/theme.type";

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const prefersDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)"
    ).matches;
    const [theme, setTheme] = useState<Theme>(() => {
        return (
            (localStorage.getItem("theme") as Theme) ||
            (prefersDark ? "dark" : "light")
        );
    });

    useEffect(() => {
        document.body.dataset.bsTheme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
