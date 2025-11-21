import { ReactNode } from "react";

type Props<T> = {
    data: T[];
    renderItem: (product: T, index: number) => ReactNode;
};

export const ProductsGrid = <T,>({ data, renderItem }: Props<T>) => (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {data.map(renderItem)}
    </div>
);
