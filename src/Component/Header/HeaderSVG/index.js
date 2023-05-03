import classNames from 'classnames/bind';

import style from './HeaderSVG.module.scss';

const cx = classNames.bind(style);

function HeaderSVG() {
    return (
        <svg>
            <symbol
                className={cx('c-headerSVG')}
                id="language_ico"
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 2C7.68629 2 5 4.68629 5 8V40C5 43.3137 7.68629 46 11 46H37C40.3137 46 43 43.3137 43 40V8C43 4.68629 40.3137 2 37 2H11ZM9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V40C39 41.1046 38.1046 42 37 42H11C9.89543 42 9 41.1046 9 40V8ZM26.063 14.1175C25.7306 13.4415 25.0465 13.0096 24.2933 13.0002C23.54 12.9907 22.8453 13.4054 22.4961 14.0729L15.6945 27.0746L12.4672 33.1814C12.2092 33.6697 12.3958 34.2747 12.8841 34.5328L14.6524 35.4672C15.1407 35.7253 15.7457 35.5386 16.0038 35.0503L18.6718 30.0017H29.4421L32.0324 35.0274C32.2854 35.5183 32.8885 35.7112 33.3794 35.4581L35.1572 34.5419C35.6481 34.2888 35.8409 33.6858 35.5879 33.1948L32.4477 27.1022L26.063 14.1175ZM27.4492 26.0017H20.77L24.213 19.4202L27.4492 26.0017Z"
                ></path>
            </symbol>
            <symbol
                className={cx('c-headerSVG')}
                id="help_ico"
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
                ></path>
            </symbol>
            <symbol
                className={cx('c-headerSVG')}
                id="shortcuts_ico"
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24ZM24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM15 14C14.4477 14 14 14.4477 14 15V17C14 17.5523 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V15C18 14.4477 17.5523 14 17 14H15ZM14 31C14 30.4477 14.4477 30 15 30H33C33.5523 30 34 30.4477 34 31V33C34 33.5523 33.5523 34 33 34H15C14.4477 34 14 33.5523 14 33V31ZM15 22C14.4477 22 14 22.4477 14 23V25C14 25.5523 14.4477 26 15 26H17C17.5523 26 18 25.5523 18 25V23C18 22.4477 17.5523 22 17 22H15ZM22 15C22 14.4477 22.4477 14 23 14H25C25.5523 14 26 14.4477 26 15V17C26 17.5523 25.5523 18 25 18H23C22.4477 18 22 17.5523 22 17V15ZM23 22C22.4477 22 22 22.4477 22 23V25C22 25.5523 22.4477 26 23 26H25C25.5523 26 26 25.5523 26 25V23C26 22.4477 25.5523 22 25 22H23ZM30 15C30 14.4477 30.4477 14 31 14H33C33.5523 14 34 14.4477 34 15V17C34 17.5523 33.5523 18 33 18H31C30.4477 18 30 17.5523 30 17V15ZM31 22C30.4477 22 30 22.4477 30 23V25C30 25.5523 30.4477 26 31 26H33C33.5523 26 34 25.5523 34 25V23C34 22.4477 33.5523 22 33 22H31Z"
                ></path>
            </symbol>
            <symbol
                id="theme_ico"
                className={cx('c-headerSVG')}
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3019 6.38068C21.723 6.08373 22.9615 7.16986 23.009 8.50693C23.2751 16.0034 29.4377 22 37 22C37.8141 22 38.6105 21.9307 39.3839 21.7982C40.7019 21.5723 42 22.5655 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 15.3248 12.1351 8.0871 20.3019 6.38068ZM19.2223 10.8358C13.8426 12.7885 10 17.9473 10 24C10 31.732 16.268 38 24 38C31.06 38 36.8994 32.7742 37.8611 25.9797C37.5756 25.9932 37.2886 26 37 26C28.0237 26 20.5827 19.4301 19.2223 10.8358Z"
                ></path>
            </symbol>
            <symbol
                className={cx('c-headerSVG')}
                id="back_ico"
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L8.82843 24L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z"
                ></path>
            </symbol>
            <symbol
                className={cx('c-headerSVG')}
                id="add_effect"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                width="22px"
                height="22px"
            >
                <path
                    fill="black"
                    d="M0 22V11C0 4.925 4.925 0 11 0s11 4.925 11 11v11H0zm19.25-2.75V11A8.25 8.25 0 007.055 3.753a8.243 8.243 0 018.09 3.632A5.479 5.479 0 0116.5 11v8.25h2.75zM7.946 6.425a5.5 5.5 0 00-5.196 5.492v7.333H5.5V11c0-1.908.971-3.589 2.446-4.575zm5.008 2.64A2.75 2.75 0 008.25 11v8.25h5.5v-7.333c0-1.044-.291-2.02-.796-2.852z"
                ></path>
                <path
                    fill="url(#eh-header-logo_svg__paint0_linear_1104_31608)"
                    d="M0 22V11C0 4.925 4.925 0 11 0s11 4.925 11 11v11H0zm19.25-2.75V11A8.25 8.25 0 007.055 3.753a8.243 8.243 0 018.09 3.632A5.479 5.479 0 0116.5 11v8.25h2.75zM7.946 6.425a5.5 5.5 0 00-5.196 5.492v7.333H5.5V11c0-1.908.971-3.589 2.446-4.575zm5.008 2.64A2.75 2.75 0 008.25 11v8.25h5.5v-7.333c0-1.044-.291-2.02-.796-2.852z"
                ></path>
                <path
                    fill="url(#eh-header-logo_svg__paint1_radial_1104_31608)"
                    fillOpacity="0.6"
                    d="M0 22V11C0 4.925 4.925 0 11 0s11 4.925 11 11v11H0zm19.25-2.75V11A8.25 8.25 0 007.055 3.753a8.243 8.243 0 018.09 3.632A5.479 5.479 0 0116.5 11v8.25h2.75zM7.946 6.425a5.5 5.5 0 00-5.196 5.492v7.333H5.5V11c0-1.908.971-3.589 2.446-4.575zm5.008 2.64A2.75 2.75 0 008.25 11v8.25h5.5v-7.333c0-1.044-.291-2.02-.796-2.852z"
                ></path>
                <path
                    fill="url(#eh-header-logo_svg__paint2_radial_1104_31608)"
                    fillOpacity="0.6"
                    d="M0 22V11C0 4.925 4.925 0 11 0s11 4.925 11 11v11H0zm19.25-2.75V11A8.25 8.25 0 007.055 3.753a8.243 8.243 0 018.09 3.632A5.479 5.479 0 0116.5 11v8.25h2.75zM7.946 6.425a5.5 5.5 0 00-5.196 5.492v7.333H5.5V11c0-1.908.971-3.589 2.446-4.575zm5.008 2.64A2.75 2.75 0 008.25 11v8.25h5.5v-7.333c0-1.044-.291-2.02-.796-2.852z"
                ></path>
                <defs>
                    <radialGradient
                        id="eh-header-logo_svg__paint1_radial_1104_31608"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(137.121 8.563 5.382) scale(19.105)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF00E5"></stop>
                        <stop
                            offset="1"
                            stopColor="#FF00E5"
                            stopOpacity="0"
                        ></stop>
                    </radialGradient>
                    <radialGradient
                        id="eh-header-logo_svg__paint2_radial_1104_31608"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(-40.03 25.148 1.387) scale(16.3248)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00FFFF"></stop>
                        <stop
                            offset="1"
                            stopColor="#000AFF"
                            stopOpacity="0"
                        ></stop>
                    </radialGradient>
                    <linearGradient
                        id="eh-header-logo_svg__paint0_linear_1104_31608"
                        x1="0"
                        x2="22"
                        y1="0"
                        y2="22"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF698D" stopOpacity="0.806"></stop>
                        <stop offset="0.318" stopColor="#926BFF"></stop>
                        <stop
                            offset="0.538"
                            stopColor="#294FFF"
                            stopOpacity="0.85"
                        ></stop>
                        <stop offset="0.807" stopColor="#0075FF"></stop>
                        <stop offset="1" stopColor="#00D1FF"></stop>
                    </linearGradient>
                </defs>
            </symbol>
            <symbol
                id="message_ico"
                className="tiktok-y48l9g-StyledIcon e1nx07zo1"
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
                ></path>
            </symbol>
            <symbol
                className={cx('c-headerSVG')}
                id="notification_ico"
                width="32"
                data-e2e=""
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                ></path>
            </symbol>
        </svg>
    );
}

export default HeaderSVG;
