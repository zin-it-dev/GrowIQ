import React from "react";
import { Spinner } from "react-bootstrap";

const Loading: React.FC = () => {
    return (
        <>
            <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
            </Spinner>{" "}
            Loading...
        </>
    );
};

export default Loading;
