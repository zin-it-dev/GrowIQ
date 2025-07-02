export type Theme = "light" | "dark";

export type ThemeContextProps = {
    theme: Theme;
    toggleTheme: () => void;
};
