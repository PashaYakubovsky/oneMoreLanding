"use client";
import { useEffect, useState } from "react";

export enum ScrollDirection {
    down,
    up,
}

// scroll direction hook
const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(ScrollDirection.up);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? ScrollDirection.down : ScrollDirection.up;
            if (
                direction !== scrollDirection &&
                (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
            ) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        };
    }, [scrollDirection]);

    return scrollDirection;
};

export default useScrollDirection;
