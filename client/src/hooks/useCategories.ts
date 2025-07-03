import { useQuery } from "@tanstack/react-query";

import { fetchCategories } from "@/services/category.service";
import type { Category } from "@/types/category.type";

export const useCategories = () =>
    useQuery<Category[]>({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });
