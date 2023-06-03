import style from "./header.module.scss";

const Logo = ({ className }: { className: String }) => {
    return (
        <svg
            className={[style.logo, className ?? ""].join(" ")}
            width="88"
            height="35"
            viewBox="0 0 88 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.1873 11.0023C17.8148 11.0023 19.9006 11.8827 21.4446 13.6434C22.9886 15.377 23.7606 17.7337 23.7606 20.7134V34H15.7968V21.7698C15.7968 20.4696 15.4582 19.4538 14.781 18.7224C14.1038 17.9639 13.1963 17.5847 12.0586 17.5847C10.8668 17.5847 9.93223 17.9639 9.25503 18.7224C8.57784 19.4538 8.23924 20.4696 8.23924 21.7698V34H0.275391V11.2055H8.23924V14.4561C8.94352 13.4267 9.8916 12.6005 11.0835 11.9775C12.2753 11.3274 13.6433 11.0023 15.1873 11.0023Z"
                fill="black"
            />
            <path
                d="M32.153 9.09265C30.7444 9.09265 29.6067 8.71342 28.7399 7.95496C27.9002 7.16941 27.4803 6.19424 27.4803 5.02946C27.4803 3.83759 27.9002 2.84889 28.7399 2.06334C29.6067 1.27779 30.7444 0.88501 32.153 0.88501C33.5345 0.88501 34.6451 1.27779 35.4848 2.06334C36.3516 2.84889 36.785 3.83759 36.785 5.02946C36.785 6.19424 36.3516 7.16941 35.4848 7.95496C34.6451 8.71342 33.5345 9.09265 32.153 9.09265ZM36.0943 11.2055V34H28.1304V11.2055H36.0943Z"
                fill="black"
            />
            <path
                d="M39.3293 22.5824C39.3293 20.2258 39.8169 18.1671 40.792 16.4064C41.7672 14.6457 43.1216 13.2913 44.8552 12.3432C46.6159 11.3951 48.6204 10.9211 50.8687 10.9211C53.7671 10.9211 56.2051 11.7202 58.1825 13.3184C60.1599 14.8895 61.433 17.0971 62.0019 19.9414H53.5504C53.0629 18.4515 52.1148 17.7066 50.7062 17.7066C49.704 17.7066 48.9049 18.1265 48.3089 18.9662C47.7401 19.7788 47.4557 20.9842 47.4557 22.5824C47.4557 24.1806 47.7401 25.3996 48.3089 26.2393C48.9049 27.079 49.704 27.4989 50.7062 27.4989C52.1419 27.4989 53.0899 26.754 53.5504 25.2641H62.0019C61.433 28.0813 60.1599 30.2889 58.1825 31.8871C56.2051 33.4853 53.7671 34.2844 50.8687 34.2844C48.6204 34.2844 46.6159 33.8104 44.8552 32.8623C43.1216 31.9142 41.7672 30.5598 40.792 28.7991C39.8169 27.0384 39.3293 24.9662 39.3293 22.5824Z"
                fill="black"
            />
            <path
                d="M87.0889 22.3386C87.0889 22.9617 87.0482 23.5847 86.967 24.2077H71.8926C71.9738 25.4537 72.3124 26.3883 72.9083 27.0113C73.5314 27.6072 74.3169 27.9052 75.265 27.9052C76.5923 27.9052 77.5404 27.3093 78.1092 26.1174H86.6013C86.2492 27.6885 85.5584 29.0971 84.5291 30.3431C83.5268 31.5621 82.2537 32.5237 80.7097 33.228C79.1657 33.9323 77.4591 34.2844 75.5901 34.2844C73.3418 34.2844 71.3372 33.8104 69.5765 32.8623C67.8429 31.9142 66.475 30.5598 65.4727 28.7991C64.4976 27.0384 64.01 24.9662 64.01 22.5824C64.01 20.1987 64.4976 18.14 65.4727 16.4064C66.4479 14.6457 67.8023 13.2913 69.5359 12.3432C71.2966 11.3951 73.3147 10.9211 75.5901 10.9211C77.8384 10.9211 79.8293 11.3816 81.5629 12.3026C83.2966 13.2236 84.651 14.5509 85.6261 16.2845C86.6013 17.991 87.0889 20.0091 87.0889 22.3386ZM78.9625 20.3477C78.9625 19.3725 78.6374 18.6141 77.9873 18.0723C77.3372 17.5034 76.5246 17.219 75.5494 17.219C74.5743 17.219 73.7752 17.4899 73.1521 18.0317C72.5291 18.5463 72.1228 19.3183 71.9332 20.3477H78.9625Z"
                fill="black"
            />
        </svg>
    );
};

export default Logo;
