import React from "react";

import ContentLayout from "../layouts/ContentLayout";
import CTA from "./CTA";
import { useTheme } from "@/hooks/useTheme";

const Hero: React.FC = () => {
    const { theme } = useTheme();

    return (
        <ContentLayout
            className={`text-center bg-${
                theme === "light" ? "light" : "dark"
            }`}
        >
            <h1 className="display-4 fw-bold">Welcome to GrowIQ!</h1>
            <p className="lead">
                Your trusted solution for performance, security, and support.
            </p>
            <CTA title={"Get Started"} variant="primary" />
        </ContentLayout>
    );
};

export default Hero;
