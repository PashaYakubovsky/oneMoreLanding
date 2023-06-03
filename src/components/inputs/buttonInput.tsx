import { HTMLInputTypeAttribute } from "react";
import style from "./inputs.module.scss";

interface ButtonInputProps {
    buttonText?: string;
    placeholder?: string;
    inputType?: HTMLInputTypeAttribute;
}

const ButtonInput = ({ buttonText, placeholder, inputType }: ButtonInputProps) => {
    return (
        <div className={style.inputWrap}>
            <input type={inputType} placeholder={placeholder} className={style.input} />
            {buttonText ? <button className={style.inputButton}>{buttonText}</button> : null}
        </div>
    );
};

export default ButtonInput;
