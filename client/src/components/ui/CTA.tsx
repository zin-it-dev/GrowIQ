import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type CTAProps = {
    title: string;
    variant: string;
};

const CTA: React.FC<CTAProps> = (props: CTAProps) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button size={"lg"} variant={props.variant} onClick={handleShow}>
                {props.title}
            </Button>

            <Modal
                size="lg"
                centered
                backdrop="static"
                keyboard={false}
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Leave your contact info and we'll reach out with a
                        custom demo.
                    </p>

                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CTA;
