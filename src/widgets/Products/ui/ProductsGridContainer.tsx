"use client";

import { useIntersection } from "../model/useIntersection";
import {
    ProductCard,
    ProductsGrid,
    ProductSkeleton,
} from "@/app/entites/Product";
import { useProductsQuery } from "../model/useProductsQuery";
import { ErrorAlert } from "./ErrorAlert";

export const ProductsGridContainer = () => {
    const { data, isLoading, isFetchingNextPage, fetchNextPage, error } =
        useProductsQuery();
    const bottomRef = useIntersection(fetchNextPage);

    if (error) {
        console.log(error);
        return <ErrorAlert error={error} />;
    }

    if (isLoading || !data) {
        return (
            <ProductsGrid
                data={Array.from({ length: 8 })}
                renderItem={(_, i) => <ProductSkeleton key={i} />}
            />
        );
    }

    return (
        <section className="w-full">
            <ProductsGrid
                data={data}
                renderItem={(product) => (
                    <ProductCard product={product} key={product?.id} />
                )}
            />

            <div ref={bottomRef}>
                {isFetchingNextPage && (
                    <ProductsGrid
                        data={Array.from({ length: 4 })}
                        renderItem={(_, i) => <ProductSkeleton key={i} />}
                    />
                )}
            </div>
        </section>
    );
};
