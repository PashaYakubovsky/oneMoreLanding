"use client";
import useScrollDirection, { ScrollDirection } from "@/hooks/useScrollDirection";
import style from "./header.module.scss";
import Logo from "./logo";
import Messengers from "./messengers";
import Navigation from "./navigation";
import { Hamburger } from "./hamburger";
import { useState } from "react";

const Header = () => {
    const scrollDirection = useScrollDirection();
    const [mobileNavOpen, changeMobileNavOpen] = useState(false);

    return (
        <header
            className={[
                style.headerWrap,
                scrollDirection === ScrollDirection.down ? style.headerDown : "",
            ].join(" ")}>
            <Hamburger>
                <Navigation className={style.navMobile} />
            </Hamburger>

            <Logo />

            <Navigation />

            <Messengers />
        </header>
    );
};

export default Header;
