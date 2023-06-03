"use client";
import { useRef } from "react";
import style from "./sliders.module.scss";
import { animated, to, useSpring } from "@react-spring/web";
import { useGesture } from "react-use-gesture";

export interface ICard {
    imageUrl: string;
    title: string;
    description: string;
    id: string;
}

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20;

const Card = ({ imageUrl, description, title }: ICard) => {
    const domTarget = useRef(null);
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(() => ({
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        zoom: 0,
        x: 0,
        y: 0,
        config: { mass: 5, tension: 350, friction: 40 },
    }));

    useGesture(
        {
            // onDrag: ({ active, offset: [x, y] }) =>
            //     api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
            onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
            onMove: ({ xy: [px, py], dragging }) =>
                !dragging &&
                api({
                    rotateX: calcX(py, y.get()),
                    rotateY: calcY(px, x.get()),
                    scale: 1.1,
                }),
            onHover: ({ hovering }) => !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
        },
        { domTarget, eventOptions: { passive: false } }
    );

    return (
        <animated.div
            ref={domTarget}
            className={style.card}
            style={{
                transform: "perspective(600px)",
                x,
                y,
                scale: to([scale, zoom], (s, z) => s + z),
                rotateX,
                rotateY,
                rotateZ,
            }}>
            <div
                className={style.cardImage}
                aria-label="card image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <h3 className={style.cardTitle}>{title}</h3>
            <p className={style.cardDescription}>{description}</p>
        </animated.div>
    );
};

export default Card;
