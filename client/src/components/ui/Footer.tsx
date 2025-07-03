import React from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-4">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5>GrowIQ</h5>
                        <p className="text-muted">
                            Empowering businesses with modern digital tools.
                        </p>
                    </Col>

                    <Col md={4} className="mb-4">
                        <h6>Quick Links</h6>

                        <ListGroup>
                            <ListGroup.Item>
                                <Link to={"/"} className="text-decoration-none">
                                    Cras justo odio
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={"/"} className="text-decoration-none">
                                    Cras justo odio
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={"/"} className="text-decoration-none">
                                    Cras justo odio
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={4}>
                        <h6>Subscribe</h6>
                        <Form className="d-flex flex-column gap-2">
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                            />
                            <Button variant="outline-light" type="submit">
                                Subscribe
                            </Button>
                        </Form>
                        <div className="mt-3">
                            <Link to={"/"} className="text-light me-3">
                                <FaFacebookF size={18} />
                            </Link>
                            <Link to={"/"} className="text-light me-3">
                                <FaXTwitter size={18} />
                            </Link>
                            <Link to={"/"} className="text-light">
                                <FaInstagram size={18} />
                            </Link>
                        </div>
                    </Col>
                </Row>

                <hr className="border-secondary" />
                <p className="text-center mb-0 text-muted">
                    &copy; 2025 MyBrand. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
