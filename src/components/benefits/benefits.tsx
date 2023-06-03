import CardsSlider from "../slider/cardsSlider";
import style from "./benefits.module.scss";
import json from "../../lib/cards.json";
import { ICard } from "../slider/card";

const Benefits = () => {
    return (
        <div className={style.benefitsWrap}>
            <div className={style.benefits}>
                <div id="benefits" className={style.benefitsInfo}>
                    <h2 className={style.benefitsTitle}>Um subtítulo para quem rolou até aqui!</h2>
                    <span className={style.benefitsDescription}>
                        Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
                        Palavras-chave ajudam no SEO.
                    </span>
                </div>
            </div>

            <CardsSlider cards={json?.cards as ICard[]} />
        </div>
    );
};

export default Benefits;
