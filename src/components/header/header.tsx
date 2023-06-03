"use client";
import useScrollDirection, { ScrollDirection } from "@/hooks/useScrollDirection";
import style from "./header.module.scss";

const Header = () => {
    const scrollDirection = useScrollDirection();
    return (
        <header
            className={[
                style.headerWrap,
                scrollDirection === ScrollDirection.down ? style.headerDown : "",
            ].join(" ")}></header>
    );
};

export default Header;
