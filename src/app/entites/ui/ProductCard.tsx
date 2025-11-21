"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/shared/api/Products";
import { ShoppingCart } from "lucide-react";
import { FC, useState } from "react";

type Props = {
    product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
    const [imageRef, setImageRef] = useState(product.images[0]);

    const onError = () =>
        setImageRef(
            "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?semt=ais_hybrid&w=740&q=80"
        );

    return (
        <Card className="mb-4 pb-2 pt-0 rounded-t-4xl rounded-b-2xl overflow-hidden gap-2 cursor-pointer hover:shadow-xl transition">
            <CardContent className="p-0">
                <img
                    src={imageRef}
                    alt={product.title}
                    className="object-contain"
                    onError={onError}
                />
            </CardContent>
            <CardFooter className="p-2 flex flex-col items-baseline">
                <h2 className="scroll-m-20 text-lg md:text-2xl font-semibold tracking-tight whitespace-nowrap">
                    {product.price + " $"}
                </h2>
                <div className="w-full overflow-hidden min-w-0">
                    <h4 className="text-sm md:text-lg font-semibold truncate">
                        {product.title}
                    </h4>
                </div>

                <Button className="w-full mt-2" variant={"default"}>
                    В корзину
                    <ShoppingCart />
                </Button>
            </CardFooter>
        </Card>
    );
};
