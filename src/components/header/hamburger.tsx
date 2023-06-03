"use client";
import React, { ReactElement, useCallback, useState } from "react";
import style from "./header.module.scss";

export interface HamburgerProps {
    onClick?: () => void;
    isInitiallyOpen?: boolean;
    children?: string | JSX.Element | JSX.Element[];
}

export const Hamburger = ({ onClick, isInitiallyOpen, children }: HamburgerProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

    const handleClick = useCallback(() => {
        setIsOpen(prev => !prev);
        onClick?.();
    }, [onClick]);

    const childrenWithProps = React.Children.map(children, child => {
        // Checking isValidElement is the safe way and avoids a
        // typescript error too.
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                open: isOpen,
            } as unknown as React.HTMLAttributes<HTMLDivElement>);
        }
        return child;
    });

    return (
        <div className={style.hamburgerWrap}>
            <button
                onClick={handleClick}
                type="button"
                className={[style.hamburger, isOpen ? style.hamburgerOpen : ""].join(" ")}>
                <div className={style.hamburgerItem} />
                <div className={style.hamburgerItem} />
                <div className={style.hamburgerItem} />
            </button>
            {isOpen ? childrenWithProps : null}
        </div>
    );
};
