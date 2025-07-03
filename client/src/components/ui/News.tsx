import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import ContentLayout from "../layouts/ContentLayout";
import Paginators from "./Paginators";

const News: React.FC = () => {
    return (
        <ContentLayout className="bg-light">
            <h2 className="mb-4 text-center">Latest Articles</h2>

            <Row className="g-4">
                <Col md={4}>
                    <Card className="h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src="https://source.unsplash.com/600x400/"
                        />
                        <Card.Body>
                            <Card.Title>
                                Boosting Productivity in Remote Teams
                            </Card.Title>
                            <Card.Text className="text-muted">
                                March 20, 2025
                            </Card.Text>
                            <Card.Text>
                                Discover key strategies to improve collaboration
                                in your distributed workforce...
                            </Card.Text>
                            <Button variant="outline-primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Paginators />
        </ContentLayout>
    );
};

export default News;
