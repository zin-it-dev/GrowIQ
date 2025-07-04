import { RoutePath } from "@/types/route.type";

export const stackRoutes: RoutePath[] = [
    {
        path: "(tabs)",
        options: { headerShown: false },
    },
    {
        path: "courses/[id]",
        options: { headerShown: false },
    },
];
