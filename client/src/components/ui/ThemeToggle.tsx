import React from "react";
import { motion } from "motion/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { Button } from "react-bootstrap";

import { useTheme } from "@/hooks/useTheme";
import type { StyleProps } from "@/types/styles.type";

const ThemeToggle: React.FC<StyleProps> = ({
    className = "d-lg-none d-block",
}) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Button
                onClick={toggleTheme}
                variant={theme === "dark" ? "light" : "dark"}
                className={className}
            >
                {theme === "dark" ? <LuSun size={18} /> : <LuMoon size={18} />}
            </Button>
        </motion.div>
    );
};

export default ThemeToggle;
