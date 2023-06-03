import Link from "next/link";
import style from "./footer.module.scss";

const Copyright = () => {
    return (
        <Link target="blanc" className={style.copyright} href="https://github.com/PashaYakubovsky">
            ©️ My Github
        </Link>
    );
};

export default Copyright;
