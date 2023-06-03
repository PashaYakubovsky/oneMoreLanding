import Button from "../buttons/button";
import style from "./principal.module.scss";
import Image from "next/image";
import bitCoinMan from "../../../public/businessmanInvestingBitcoin.png";
import burgerShape from "../../../public/burgerShape.png";
import GooBlobsAnimation from "./gooBlobsAnimation";

const Principal = () => {
    return (
        <div id="principal" className={style.principalWrap}>
            <ul className={style.content}>
                <li className={style.contentHeader}>Um slogan chamativo aqui.</li>
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

                <svg
                    className={style.shine}
                    width="375"
                    height="717"
                    viewBox="0 0 375 717"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_115_26)">
                        <circle cx="204.5" cy="358.5" r="158.5" fill="url(#paint0_linear_115_26)" />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_115_26"
                            x="-154"
                            y="0"
                            width="717"
                            height="717"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="100"
                                result="effect1_foregroundBlur_115_26"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_115_26"
                            x1="204.5"
                            y1="200"
                            x2="204.5"
                            y2="517"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00C2FF" stop-opacity="0" />
                            <stop offset="1" stop-color="#FF29C3" />
                        </linearGradient>
                    </defs>
                </svg>
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
