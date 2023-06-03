import style from "./shine.module.scss";

const Shine = ({ className }: { className?: string }) => {
    return (
        <div className={className ?? ""}>
            <svg
                className={style.shine}
                width="375"
                height="717"
                viewBox="0 0 375 717"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_115_26)">
                    <circle cx="204.5" cy="358.5" r="158.5" fill="url(#paint0_linear_115_26)" />
                </g>
                <defs>
                    <filter
                        id="filter0_f_115_26"
                        x="-154"
                        y="0"
                        width="717"
                        height="717"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_115_26" />
                    </filter>
                    <linearGradient
                        id="paint0_linear_115_26"
                        x1="204.5"
                        y1="200"
                        x2="204.5"
                        y2="517"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00C2FF" stop-opacity="0" />
                        <stop offset="1" stop-color="#FF29C3" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default Shine;
