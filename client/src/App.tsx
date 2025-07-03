import React from "react";
import { Route, Routes } from "react-router";

import RootLayout from "@/components/layouts/RootLayout";
import Home from "@/pages/main/Home";

const App: React.FC = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" index element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
