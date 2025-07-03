import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5
        },
    },
});

export default function QueryProvider({ children }: PropsWithChildren<{}>) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {import.meta.env.MODE === "development" && (
                <ReactQueryDevtools initialIsOpen={false} />
            )}
        </QueryClientProvider>
    );
}
