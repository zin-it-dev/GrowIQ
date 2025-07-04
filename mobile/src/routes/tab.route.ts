import { RoutePath } from "@/types/route.type";

export const tabRoutes: RoutePath[] = [
    {
        path: "index",
        options: {
            title: "Home",
            headerShown: false,
            icon: "house",
        },
    },
    {
        path: "search",
        options: {
            title: "Search",
            headerShown: false,
            icon: "search",
        },
    },
    {
        path: "cart",
        options: {
            title: "Cart",
            headerShown: false,
            icon: "shopping-cart",
        },
    },
    {
        path: "profile",
        options: {
            title: "Profile",
            headerShown: false,
            icon: "person",
        },
    },
];
