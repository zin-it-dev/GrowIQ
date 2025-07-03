import React from "react";
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    Offcanvas,
} from "react-bootstrap";
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router";

import { useTheme } from "@/hooks/useTheme";
import LogIn from "./LogIn";
import Menu from "./Menu";
import Cart from "./Cart";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
    const expand: string = "lg";
    const { theme } = useTheme();

    return (
        <Navbar
            bg={theme}
            variant={theme}
            expand={expand}
            as="header"
            sticky="top"
            className="shadow"
        >
            <Container>
                <Navbar.Brand href="#" className="h1 mb-0 fw-bold">
                    GrowIQ
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                />

                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title
                            id={`offcanvasNavbarLabel-expand-${expand}`}
                            className="flex-grow-1"
                        >
                            Offcanvas
                        </Offcanvas.Title>

                        <div className="gap-2 d-flex pe-2">
                            <Cart />
                            <ThemeToggle />
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="mx-auto">
                            <Menu expland={expand} />

                            <Nav.Link as={NavLink} to="/">
                                Courses
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/">
                                Learning Paths
                            </Nav.Link>
                        </Nav>

                        <Nav className="align-items-lg-center gap-2 mt-2 mt-lg-0">
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search for anything"
                                    className="me-1"
                                    aria-label="Search for anything"
                                />
                                <Button variant="outline-success m-0">
                                    <LuSearch size={20} />
                                </Button>
                            </Form>

                            <Cart className="d-none d-lg-block" />

                            <div className="d-flex gap-2">
                                <LogIn />
                                <Button variant={"warning"}>Register</Button>
                            </div>

                            <ThemeToggle className="d-none d-lg-block" />
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;
