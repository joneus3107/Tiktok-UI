import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import {
    IcoLang,
    IcoHelp,
    IcoTheme,
    IcoBack,
    IcoShortcut,
} from '~/Component/IconsList';

import ThemeBtn from '~/Component/ThemeBtn';
// import HeaderSVG from '~/Component/Header/HeaderSVG';
import TooltipWrapper from '~/Component/Header/TooltipWrapper';
import styles from '~/Component/Header/guestNav/HeaderMenu/HeaderMenu.module.scss';

const cx = classNames.bind(styles);

const MENU_DATA = [
    {
        data: [
            {
                label: 'Tiếng Việt',
                icon: {
                    name: '#language_ico',
                    alt: 'language',
                    fallback: <IcoLang />,
                },
                children: {
                    title: 'Ngôn ngữ',
                    data: [
                        {
                            ID: 'vi',
                            label: 'Tiếng Việt',
                        },
                        {
                            ID: 'en',
                            label: 'English',
                            children: {
                                title: 'English',
                                data: [
                                    {
                                        ID: 'en-US',
                                        label: 'America',
                                    },
                                    {
                                        ID: 'en-UK',
                                        label: 'England',
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
            {
                label: 'Phản hồi và trợ giúp',
                icon: {
                    name: '#help_ico',
                    alt: 'help',
                    fallback: <IcoHelp />,
                },
                to: '/',
            },
            {
                label: 'Phím tắt trên bàn phím',
                icon: {
                    name: '#shortcuts_ico',
                    alt: 'shortcut',
                    fallback: <IcoShortcut />,
                },
                to: false,
            },
            {
                label: 'Chế độ tối',
                icon: {
                    name: '#theme_ico',
                    alt: 'theme',
                    fallback: <IcoTheme />,
                },
                button: true,
            },
        ],
    },
];

function HeaderMenu({ children, classNames }) {
    const [display, setDisplay] = useState(MENU_DATA);

    const handleChildren = (data) => {
        if (!data) {
            return;
        }
        setDisplay((prev) => [...prev, data]);
    };

    const handleBack = () => {
        setDisplay((prev) => prev.slice(0, -1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 800]}
            placement="bottom-end"
            render={(atts) => (
                <div tabIndex="-1" {...atts}>
                    <TooltipWrapper classNames={classNames}>
                        <ul className={cx('c-headerMenu')}>
                            {display[display.length - 1].title ? (
                                <li className={cx('c-headerMenu__title')}>
                                    <h3>
                                        {display[display.length - 1].title}
                                        <button onClick={handleBack}>
                                            <IcoBack />
                                        </button>
                                    </h3>
                                </li>
                            ) : (
                                ''
                            )}
                            {display[display.length - 1].data.map(
                                (data, index) => {
                                    const WrapBox = ({ children }) => {
                                        return data.to ? (
                                            <Link to={data.to}>{children}</Link>
                                        ) : (
                                            <div
                                                onClick={
                                                    data.children
                                                        ? () =>
                                                              handleChildren(
                                                                  data.children,
                                                              )
                                                        : undefined
                                                }
                                            >
                                                {children}
                                            </div>
                                        );
                                    };
                                    return (
                                        <li key={index}>
                                            <WrapBox>
                                                {data.icon ? (
                                                    data.icon.fallback ? (
                                                        data.icon.fallback
                                                    ) : (
                                                        <svg
                                                            alt={data.icon.alt}
                                                        >
                                                            <use
                                                                xlinkHref={
                                                                    data.icon
                                                                        .name
                                                                }
                                                            ></use>
                                                        </svg>
                                                    )
                                                ) : (
                                                    ''
                                                )}
                                                {data.label}
                                            </WrapBox>
                                            {data.button ? <ThemeBtn /> : ''}
                                        </li>
                                    );
                                },
                            )}
                        </ul>
                        {/* <HeaderSVG /> */}
                    </TooltipWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default HeaderMenu;
