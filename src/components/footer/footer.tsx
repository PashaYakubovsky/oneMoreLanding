import Logo from "../header/logo";
import Messengers from "../header/messengers";
import Navigation from "../header/navigation";
import Copyright from "./copyRight";
import EmailSubscriptionForm from "./emailSubscriptionForm";
import style from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerNav}>
                <Logo className={style.footerLogo} />
                <Navigation className={style.footerNavInner} />
                <Messengers className={style.footerMessengers} />
            </div>

            <EmailSubscriptionForm />

            <Copyright />
        </footer>
    );
};

export default Footer;
