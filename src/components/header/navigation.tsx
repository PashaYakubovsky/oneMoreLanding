"use client";
import Link from "next/link";
import style from "./header.module.scss";
import { useEffect } from "react";
import { animated, useTransition } from "@react-spring/web";

interface NavigationProps {
    className?: string;
    open?: boolean;
}

const Navigation = ({ className, open }: NavigationProps) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflowY = "hidden";
            return;
        }
        document.body.style.overflowY = "auto";
    }, [open]);

    const transition = useTransition(open !== null && open !== undefined ? open : true, {
        from: {
            opacity: 0,
            transformMain: "translateY(40px)",
            transformFoot: "translateY(200px)",
        },
        enter: {
            opacity: 1,
            transformMain: "translateY(0px)",
            transformFoot: "translateY(0px)",
        },
        leave: {
            opacity: 0,
            transformMain: "translateY(40px)",
            transformFoot: "translateY(200px)",
        },
    });

    return transition((styles, item) => {
        return (
            item && (
                <animated.ul style={styles} className={[style.nav, className ?? ""].join(" ")}>
                    <li className={style.navItem}>
                        <Link href="#main" className={style.navItemLink}>
                            o que fazemos
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link href="#magenta" className={style.navItemLink}>
                            como te ajudamos
                        </Link>
                    </li>
                    <li className={style.navItem}>
                        <Link href="#contacts" className={style.navItemLink}>
                            fale conosco
                        </Link>
                    </li>
                </animated.ul>
            )
        );
    });
};

export default Navigation;
