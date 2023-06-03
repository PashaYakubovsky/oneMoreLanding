import Shine from "../backgrounds/shine";
import Button from "../buttons/button";
import style from "./magenta.module.scss";

const Magenta = () => {
    return (
        <div className={style.magentaWrap}>
            <div className={style.magentaInfo}>
                <span className={style.magentaHashtag}>#contecomagente</span>
                <h3 className={style.magentaTitle}>Simples, rápido e do seu jeito.</h3>
                <p className={style.magentaDescription}>
                    Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário
                    que está lendo. Gerar identificação é a chave para conquistar seu cliente.
                </p>
                <Button className={style.magentaButton} primary text="Eu quero!" />
            </div>

            <div className={style.magentaImages}>
                <div className={style.magentaMan} aria-label="image man pointing to left top" />
                <Shine className={style.magentaShine} />

                <div
                    className={[style.burgerShape, style.burgerShape1].join(" ")}
                    aria-label="image of burger"
                />
                <div
                    className={[style.burgerShape, style.burgerShape2].join(" ")}
                    aria-label="image of burger"
                />
                <div
                    className={[style.burgerShape, style.burgerShape3].join(" ")}
                    aria-label="image of burger"
                />
                <div
                    className={[style.burgerShape, style.burgerShape4].join(" ")}
                    aria-label="image of burger"
                />
            </div>
        </div>
    );
};

export default Magenta;
