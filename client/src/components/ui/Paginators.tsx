import React from "react";
import { Pagination } from "react-bootstrap";
import { AnimatePresence, motion } from "motion/react";

const Paginators: React.FC = () => {
    return (
        <AnimatePresence>
            <motion.nav
                animate={{ animationDuration: 700 }}
                transition={{ type: "spring" }}
                className="nav mt-5 justify-content-center"
            >
                <Pagination className="pagination">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>

                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </motion.nav>
        </AnimatePresence>
    );
};

export default Paginators;
