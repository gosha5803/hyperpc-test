import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../ui/button";
import { ShoppingCart, Download, ArrowRight } from "lucide-react";

const meta: Meta<typeof Button> = {
    title: "Components/UI/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: [
                "default",
                "destructive",
                "outline",
                "secondary",
                "ghost",
                "link",
            ],
            description: "Вариант стиля кнопки",
        },
        size: {
            control: { type: "select" },
            options: ["default", "sm", "lg", "icon"],
            description: "Размер кнопки",
        },
        disabled: {
            control: { type: "boolean" },
            description: "Состояние disabled",
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "default",
        children: "Кнопка",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Вторичная кнопка",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Контурная кнопка",
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
        children: "Опасное действие",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Призрачная кнопка",
    },
};

export const Link: Story = {
    args: {
        variant: "link",
        children: "Кнопка-ссылка",
    },
};

export const Small: Story = {
    args: {
        size: "sm",
        children: "Маленькая кнопка",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
        children: "Большая кнопка",
    },
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Добавить в корзину
            </>
        ),
    },
};

export const IconOnly: Story = {
    args: {
        size: "icon",
        children: <Download className="h-4 w-4" />,
    },
};

export const WithRightIcon: Story = {
    args: {
        variant: "outline",
        children: (
            <>
                Продолжить
                <ArrowRight className="ml-2 h-4 w-4" />
            </>
        ),
    },
};
