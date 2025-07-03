import type { Base } from "./base.type";

export type Category = Base & {
    name: number;
    children: Category[];
};
