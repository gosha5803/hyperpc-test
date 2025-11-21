// src/components/ProductCard/ProductCard.stories.ts
import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "../ProductCard";
import { FC } from "react";
import { ProductSkeleton } from "../ProductSkeleton";

const meta: Meta<typeof ProductCard> = {
    title: "Components/ProductCard",
    component: ProductCard,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;
const mockProduct = {
    id: 1,
    title: "iPhone 15 Pro",
    description:
        "Latest flagship smartphone with titanium design and powerful A17 Pro chip",
    price: 999,
    discountPercentage: 5.5,
    rating: 4.8,
    stock: 50,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone-15-Pro/thumbnail.png",
    images: [
        "https://sam-basket-cdn-04mt.geobasket.ru/vol3142/part314263/314263946/images/big/1.webp",
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone-15-Pro/3.png",
        "https://sam-basket-cdn-05mt.geobasket.ru/vol4216/part421608/421608779/images/big/1.webp",
    ],
};
export const ResponsiveGrid: Story = {
    render: () => (
        <div className="w-full max-w-6xl p-6 bg-background">
            <h2 className="text-xl font-bold mb-4 text-center">
                Основные кейсы использования на данный момент
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center">
                    <span className="text-sm text-muted-foreground block mb-2">
                        ↓ Обычная
                    </span>
                    <ProductCard product={mockProduct} />
                </div>

                <div className="text-center">
                    <span className="text-sm text-muted-foreground block mb-2">
                        ↓ Длинные тексты
                    </span>
                    <ProductCard
                        product={{
                            ...mockProduct,
                            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quod?",
                        }}
                    />
                </div>

                <div className="text-center">
                    <span className="text-sm text-muted-foreground block mb-2">
                        ↓ Нет изображения
                    </span>
                    <ProductCard
                        product={{ ...mockProduct, images: ["fakeRef"] }}
                    />
                </div>

                <div className="text-center">
                    <span className="text-sm text-muted-foreground block mb-2">
                        ↓ Скелетон
                    </span>
                    <ProductSkeleton />
                </div>
            </div>
        </div>
    ),
    name: "Адаптивная сетка",
};
