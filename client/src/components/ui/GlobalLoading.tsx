import React from "react";
import { Spinner } from "react-bootstrap";

const GlobalLoading: React.FC = () => {
    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-75"
            style={{ zIndex: 9999 }}
        >
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default GlobalLoading;
