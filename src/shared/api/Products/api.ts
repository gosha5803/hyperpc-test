import axios from "axios";
import { Product } from "./types";
import { PageableReq, PageableRes } from "@/shared/types";

const BASE_URL = "http://localhost:3001/products";

export const productsApi = {
    getProducts: async (params: PageableReq) =>
        await axios.get<PageableRes<Product>>(BASE_URL, {
            params,
        }),
};
