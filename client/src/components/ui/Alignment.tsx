import React from "react";

import ContentLayout from "../layouts/ContentLayout";
import CTA from "./CTA";

const Alignment: React.FC = () => {
    return (
        <ContentLayout className="bg-light text-center">
            <h2 className="mb-3">Don't miss out!</h2>
            <p className="lead">
                Get exclusive access to our updates and offers.
            </p>
            <CTA title="Sign Up Now" variant="primary" />
        </ContentLayout>
    );
};

export default Alignment;
