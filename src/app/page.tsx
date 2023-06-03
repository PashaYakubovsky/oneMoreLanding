"use client";
import styles from "./page.module.scss";
import { Suspense, lazy, useEffect, useState } from "react";
const Header = lazy(() => import("@/components/header/header"));
const Principal = lazy(() => import("@/components/principal/principal"));
const Footer = lazy(() => import("@/components/footer/footer"));
const Benefits = lazy(() => import("@/components/benefits/benefits"));
const Magenta = lazy(() => import("@/components/magenta/magenta"));
const Loader = lazy(() => import("react-spinners/ClimbingBoxLoader"));

export default function Home() {
    const [showMockupLoader, changeShowMockupLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            changeShowMockupLoader(false);
        }, 3000);
    }, []);

    return (
        <main className={styles.main}>
            <Suspense fallback={<Loader className={styles.loader} color="purple" />}>
                {showMockupLoader ? (
                    <Loader color="purple" className={styles.loader} />
                ) : (
                    <>
                        <Header />
                        <Principal />
                        <Benefits />
                        <Magenta />
                        <Footer />
                    </>
                )}
            </Suspense>
        </main>
    );
}
