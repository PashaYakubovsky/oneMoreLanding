import ButtonInput from "../inputs/buttonInput";
import style from "./footer.module.scss";

const EmailSubscriptionForm = () => {
    return (
        <div className={style.subscriptionWrap}>
            <span className={style.subscriptionCaption}>Receba as novidades do nice</span>
            <ButtonInput
                inputType="email"
                placeholder="please enter your email"
                buttonText="Inscrever"
            />
        </div>
    );
};

export default EmailSubscriptionForm;
