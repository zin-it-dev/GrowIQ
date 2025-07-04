import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { tabRoutes } from "@/routes/tab.route";

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "#0F0D23",
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: "absolute",
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "0F0D23",
                },
            }}
        >
            {tabRoutes.map((route) => (
                <Tabs.Screen
                    key={route.path}
                    name={route.path}
                    options={{
                        ...route.options,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                size={28}
                                name={route.options.icon}
                                color={color}
                                className="min-h-14 mt-10"
                            />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
};

export default TabLayout;
