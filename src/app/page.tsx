import styles from "./page.module.scss";
import Header from "@/components/header/header";
import Principal from "@/components/principal/principal";
import Footer from "@/components/footer/footer";
import Benefits from "@/components/benefits/benefits";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Principal />
            <Benefits />
            <Footer />
        </main>
    );
}
