import React from "react";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

import "@/styles/globals.css";
import { stackRoutes } from "@/routes/stack.route";

const RootLayout = () => {
    return (
        <PaperProvider>
            <Stack>
                {stackRoutes.map((route) => (
                    <Stack.Screen
                        key={route.path}
                        name={route.path}
                        options={route.options}
                    />
                ))}
            </Stack>
        </PaperProvider>
    );
};

export default RootLayout;
