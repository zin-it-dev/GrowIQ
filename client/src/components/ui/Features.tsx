import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { BsLightningChargeFill } from "react-icons/bs";

import ContentLayout from "../layouts/ContentLayout";

type FeatureProps = {
    title: string;
    description: string;
};

const features: FeatureProps[] = [
    {
        title: "Fast",
        description: "Easy to use and high performance.",
    },
    {
        title: "Secure",
        description: "Your data is always protected.",
    },
    {
        title: "24/7 Support",
        description: "We are always here to help you.",
    },
];

const Feature: React.FC<FeatureProps> = (props: FeatureProps) => {
    return (
        <Col md={4}>
            <Card className="h-100 shadow-sm text-center rounded shadow-sm">
                <Card.Body>
                    <div className="mb-3">
                        <BsLightningChargeFill size={24} />
                    </div>

                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

const Features: React.FC = () => {
    return (
        <ContentLayout>
            <h2 className="text-center mb-5">Our Key Features</h2>
            <Row className="g-4 gy-4">
                {features.map((feature) => (
                    <Feature key={feature.title} {...feature} />
                ))}
            </Row>
        </ContentLayout>
    );
};

export default Features;
