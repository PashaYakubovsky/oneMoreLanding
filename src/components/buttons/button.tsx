import style from "./button.module.scss";

interface ButtonProps {
    primary?: boolean;
    text?: string;
    className?: string;
}

const Button = (props: ButtonProps) => {
    const { primary, text, className } = props;

    return (
        <button
            className={[
                style.button,
                primary ? style.buttonPrimary : "",
                className ? className : "",
            ].join(" ")}>
            {text}
        </button>
    );
};

export default Button;
