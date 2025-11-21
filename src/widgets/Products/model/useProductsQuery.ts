import { productsApi } from "@/shared/api/Products";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useProductsQuery = () =>
    useInfiniteQuery({
        queryKey: ["products"],
        queryFn: (data) =>
            productsApi.getProducts({ _page: data.pageParam, _per_page: 8 }),
        enabled: true,
        initialPageParam: 1,
        getNextPageParam: ({ data }) => data.next,
        select: ({ pages }) => pages.flatMap(({ data }) => data.data),
    });
