import React from "react";

import ContentLayout from "../layouts/ContentLayout";
import { Button, Col, FloatingLabel, Form } from "react-bootstrap";

const Subscribe: React.FC = () => {
    return (
        <ContentLayout className="bg-white">
            <div className="text-center mb-4">
                <h3>Stay in the Loop</h3>
                <p className="text-muted">
                    Sign up for the latest news, updates, and promotions.
                </p>
            </div>
            <Form className="row justify-content-center g-3">
                <Col md={6}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                        />
                    </FloatingLabel>
                </Col>
                <Col md={"auto"}>
                    <Button type="submit" variant="primary" className="px-4">
                        Subscribe
                    </Button>
                </Col>
            </Form>
        </ContentLayout>
    );
};

export default Subscribe;
