import axios from "@/libs/apis/axios";
import { ENDPOINTS } from "@/constants/endpoints";
import type { Category } from "@/types/category.type";

export const fetchCategories = async (): Promise<Category[]> => {
    const res = await axios.get<Category[]>(ENDPOINTS.categories);
    return res.data;
};
