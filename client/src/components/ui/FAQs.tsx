import React from "react";
import { Accordion } from "react-bootstrap";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import ContentLayout from "../layouts/ContentLayout";

const FAQs: React.FC = () => {
    return (
        <ContentLayout className="bg-white">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <BsFillQuestionCircleFill size={20} className="me-2" />
                        What is your refund policy?
                    </Accordion.Header>
                    <Accordion.Body>
                        We offer a 14-day no-questions-asked refund policy. Just
                        contact our support and we’ll process it immediately.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </ContentLayout>
    );
};

export default FAQs;
