import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/header/header";
import Principal from "@/components/principal/principal";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Principal />
        </main>
    );
}
