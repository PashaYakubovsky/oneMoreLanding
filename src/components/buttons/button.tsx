import { ButtonHTMLAttributes, ReactPropTypes } from "react";
import style from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    text?: string;
}

const Button = (props: ButtonProps) => {
    const { primary, text } = props;

    return (
        <button {...props} className={[style.button, primary ? style.buttonPrimary : ""].join(" ")}>
            {text}
        </button>
    );
};

export default Button;
