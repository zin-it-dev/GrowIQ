import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "bootswatch/dist/brite/bootstrap.min.css";
import { ThemeProvider as BootstrapThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router";

import "@/styles/globals.css";
import App from "@/App";
import ThemeProvider from "@/providers/ThemeProvider";
import QueryProvider from "@/providers/QueryProvider";
import GlobalLoading from "@/components/ui/GlobalLoading";

const root = document.getElementById("root");

createRoot(root!).render(
    <StrictMode>
        <ThemeProvider>
            <BootstrapThemeProvider
                breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}
                minBreakpoint="xs"
            >
                <BrowserRouter>
                    <QueryProvider>
                        <Suspense fallback={<GlobalLoading />}>
                            <App />
                        </Suspense>
                    </QueryProvider>
                </BrowserRouter>
            </BootstrapThemeProvider>
        </ThemeProvider>
    </StrictMode>
);
