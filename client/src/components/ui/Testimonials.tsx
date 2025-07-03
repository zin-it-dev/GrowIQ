import React from "react";

import ContentLayout from "../layouts/ContentLayout";
import { Card, Carousel, ListGroup } from "react-bootstrap";

const Testimonials: React.FC = () => {
    return (
        <ContentLayout className="bg-light">
            <h2 className="text-center mb-5">What Our Customers Say</h2>

            <Carousel slide={true}>
                <Carousel.Item interval={3000}>
                    <Card
                        className="mx-auto shadow-sm"
                        style={{ maxWidth: "700px" }}
                    >
                        <Card.Body>
                            <blockquote className="blockquote mb-3">
                                <p className="fs-5">
                                    This platform boosted our team's
                                    productivity by 40% in just a month!
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in{" "}
                                <cite title="Source Title">
                                    CTO at TechCorp
                                </cite>
                            </figcaption>
                            <ListGroup className="mt-3" variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>
                                    Porta ac consectetur ac
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <Card
                        className="mx-auto shadow-sm"
                        style={{ maxWidth: "700px" }}
                    >
                        <Card.Body>
                            <blockquote className="blockquote mb-3">
                                <p className="fs-5">xxx</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in{" "}
                                <cite title="Source Title">
                                    CTO at TechCorp
                                </cite>
                            </figcaption>
                            <ListGroup className="mt-3" variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>
                                    Dapibus ac facilisis in
                                </ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </ContentLayout>
    );
};

export default Testimonials;
