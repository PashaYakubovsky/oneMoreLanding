import CardsSlider from "../slider/cardsSlider";
import style from "./benefits.module.scss";
import { cards } from "../../lib/cards.json";
import { useMemo } from "react";
import { ICard } from "../slider/card";

const Benefits = () => {
    const _cards = useMemo(
        () =>
            cards.map((card, idx) => ({
                ...card,
                imageUrl:
                    {
                        [0]: "/Target.png",
                        [1]: "/EthereumCoin.png",
                        [2]: "/CreditCard.png",
                    }[idx as 0 | 1 | 2] ?? "",
            })),
        []
    ) as ICard[];

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

            <CardsSlider cards={_cards} />
        </div>
    );
};

export default Benefits;
