import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";

import ContentLayout from "../layouts/ContentLayout";

const Introduction: React.FC = () => {
    return (
        <ContentLayout>
            <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                    <Image
                        src="https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_3015.jpg&w=1080&q=75"
                        alt="About Us"
                        fluid
                        rounded
                        className="shadow-sm"
                    />
                </Col>

                <Col md={6}>
                    <Card className="border-0 bg-white shadow-sm">
                        <Card.Body>
                            <Card.Title>About Our Platform</Card.Title>
                            <Card.Text>
                                We build modern, secure and scalable solutions
                                to help your business grow faster. Our team is
                                dedicated to delivering excellent results with
                                top-notch technologies.
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </ContentLayout>
    );
};

export default Introduction;
