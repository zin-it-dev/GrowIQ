import React from "react";
import { Container } from "react-bootstrap";
import Header from "../ui/Header";

const RootLayout: React.FC = () => {
    return (
        <>
            <Header />
            <Container as="main"></Container>
        </>
    );
};

export default RootLayout;
