"use client";
import style from "./sliders.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card, { ICard } from "./card";

interface CardsSliderProps {
    cards?: ICard[];
}

const CardsSlider = ({ cards = [] }: CardsSliderProps) => {
    return (
        <Swiper
            className={style.sliderWrap}
            spaceBetween={50}
            grabCursor
            breakpoints={{
                270: { slidesPerView: 1.5 },
                1200: { slidesPerView: 3 },
            }}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}>
            {cards.map(card => (
                <SwiperSlide className={style.sliderSlide} key={card.id}>
                    <Card {...card} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardsSlider;
