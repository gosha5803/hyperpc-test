import { useRef } from "react";

export const useIntersection = (callBack: () => void) => {
    const ref = useRef(() => {});

    return (anchor: HTMLDivElement | null) => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        callBack();
                    }
                }),
            {
                rootMargin: "100px",
                threshold: 1,
            }
        );

        if (anchor) {
            observer.observe(anchor);
            ref.current = () => observer.disconnect();
        } else {
            ref.current();
        }
    };
};
