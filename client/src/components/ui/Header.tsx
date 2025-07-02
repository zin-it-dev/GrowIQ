import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";

import { useTheme } from "@/hooks/useTheme";

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Navbar bg={theme} variant={theme}>
            <Container>
                <Navbar.Brand href="#" className="h1 mb-0 fw-bold">
                    GrowIQ
                </Navbar.Brand>
                <Button
                    onClick={toggleTheme}
                    variant={theme === "dark" ? "light" : "dark"}
                >
                    {theme === "dark" ? (
                        <LuSun size={20} />
                    ) : (
                        <LuMoon size={20} />
                    )}
                </Button>
            </Container>
        </Navbar>
    );
};

export default Header;
