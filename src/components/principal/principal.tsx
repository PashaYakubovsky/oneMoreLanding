import Button from "../buttons/button";
import style from "./principal.module.scss";
// import Image from "next/image";
// import bitCoinMan from "../../../public/businessmanInvestingBitcoin.png";
// import burgerShape from "../../../public/burgerShape.png";
import GooBlobsAnimation from "./gooBlobsAnimation";
import Shine from "../backgrounds/shine";

const Principal = () => {
    return (
        <div id="principal" className={style.principalWrap}>
            <ul className={style.content}>
                <li className={style.contentHeader}>
                    <h1>Um slogan chamativo aqui.</h1>
                </li>
                <li className={style.contentDescription}>
                    Um texto sobre o seu produto ou serviço. Explique{" "}
                    <b className={style.contentDescriptionYellow}>porque ele é valioso</b> e
                    direcione o usuário ao próximo objetivo.
                </li>
                <li className={style.contentButtons}>
                    <Button text="Eu quero!" primary />
                    <Button text="Conhecer mais" />
                </li>
            </ul>

            <div className={style.images}>
                <div className={style.bitCoinMan} aria-label="image man with bitcoin in hand" />

                <div className={style.burgerShape} aria-label="image of burger" />

                <GooBlobsAnimation />

                <Shine />
            </div>

            <svg
                className={style.bgColor}
                width="100vw"
                height="460"
                viewBox="0 0 100vw 460"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="-1" width="100%" height="460" fill="#2B0955" />
            </svg>
        </div>
    );
};

export default Principal;
