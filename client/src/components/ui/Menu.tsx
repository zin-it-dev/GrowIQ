import React from "react";
import { Col, NavDropdown } from "react-bootstrap";

import { useCategories } from "@/hooks/useCategories";
import { Link } from "react-router";

const Menu: React.FC<any | string> = (expand: string) => {
    const { data: categories } = useCategories();

    return (
        <NavDropdown
            title="Explore"
            id={`offcanvasNavbarDropdown-expand-${expand}`}
        >
            {categories?.map((category, idx) => (
                <Col as={"li"} key={category.slug}>
                    <NavDropdown
                        className="fw-bold py-0 m-0 px-2 px-lg-0"
                        title={category.name}
                        id={`offcanvasNavbarCategories-expand-${category.slug}`}
                    >
                        {category.children?.map((c) => (
                            <NavDropdown.Item
                                as={Link}
                                to={`/courses/?category=${c.slug}`}
                                key={c.slug}
                            >
                                {c.name}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>

                    {idx === categories.length - 1 || <NavDropdown.Divider />}
                </Col>
            ))}
        </NavDropdown>
    );
};

export default Menu;
