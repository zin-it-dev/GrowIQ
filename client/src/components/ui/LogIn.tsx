import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router";
import Loading from "./Loading";

const LogIn = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant={"primary"} onClick={handleShow}>
                Log In
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="logIn-email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="yourmail@gmail.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="logIn-password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Form.Group
                            className="d-flex align-items-center gap-2"
                            controlId="formBtn"
                        >
                            <Button
                                variant="primary"
                                className="me-auto fw-bold"
                                onClick={handleClose}
                                disabled={true}
                            >
                                {true ? <Loading /> : "Log In"}
                            </Button>
                            <Link to={"/"} className="text-decoration-none">
                                Forget password?
                            </Link>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="flex-nowrap">
                    <Button variant="info">Login with Facebook</Button>
                    <Button variant="info">Login with Google</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LogIn;
