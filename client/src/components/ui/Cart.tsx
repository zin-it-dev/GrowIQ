import React, { useState } from "react";
import { Badge, Button, Offcanvas } from "react-bootstrap";
import { RiShoppingCart2Line } from "react-icons/ri";

import type { StyleProps } from "@/types/styles.type";

const Cart: React.FC<StyleProps> = ({ className = "d-lg-none d-block" }) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                onClick={handleShow}
                variant={"outline-light"}
                className={`${className} m-0 position-relative`}
            >
                <RiShoppingCart2Line size={18} />
                <Badge
                    bg="warning"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                >
                    9
                </Badge>
            </Button>

            <Offcanvas
                show={show}
                onHide={handleClose}
                scroll={true}
                backdrop={true}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <span>
                            <RiShoppingCart2Line size={24} /> Cart
                        </span>{" "}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Cart;
