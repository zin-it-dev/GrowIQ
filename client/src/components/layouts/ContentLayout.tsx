import React from "react";
import { Container } from "react-bootstrap";

import type { StyleProps } from "@/types/styles.type";

type ContentLayoutProps = StyleProps & {
    children: React.ReactNode;
};

const ContentLayout: React.FC<ContentLayoutProps> = ({
    className,
    children,
}) => {
    return (
        <section className={`${className} py-5`}>
            <Container>{children}</Container>
        </section>
    );
};

export default ContentLayout;
