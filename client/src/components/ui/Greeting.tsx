import React from "react";
import { Button } from "react-bootstrap";

const Greeting: React.FC = () => {
    return (
        <>
            <h1>Welcome to GrowIQ !!!</h1>
            <Button onClick={() => console.log("Welcome to GrowIQ !!!")}>
                Hi, You
            </Button>
        </>
    );
};

export default Greeting;
