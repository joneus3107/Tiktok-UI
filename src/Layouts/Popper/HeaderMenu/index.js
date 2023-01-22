import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import ThemeBtn from '~/Component/ThemeBtn';
// import HeaderSVG from '~/Component/Header/HeaderSVG';
import TooltipWrapper from '~/Component/Header/TooltipWrapper';
import styles from '~/Layouts/Popper/HeaderMenu/HeaderMenu.module.scss';

const cx = classNames.bind(styles);

function HeaderMenu({ children, classNames }) {
    return (
        <Tippy
            interactive
            delay={[0, 800]}
            placement="bottom-end"
            render={(atts) => (
                <div tabIndex="-1" {...atts}>
                    <TooltipWrapper classNames={classNames}>
                        <ul className={cx('c-headerMenu')}>
                            <li>
                                <div>
                                    <svg alt="language">
                                        <use xlinkHref="#language_ico"></use>
                                    </svg>
                                    <span>Tiếng Việt</span>
                                </div>
                            </li>
                            <li>
                                <Link to="/">
                                    <svg>
                                        <use xlinkHref="#help_ico"></use>
                                    </svg>
                                    <span>Phản hồi và trợ giúp</span>
                                </Link>
                            </li>
                            <li>
                                <div>
                                    <svg>
                                        <use xlinkHref="#shortcuts_ico"></use>
                                    </svg>
                                    <span>Phím tắt trên bàn phím</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <svg alt="change_theme">
                                        <use xlinkHref="#theme_ico"></use>
                                    </svg>
                                    <span>Chế độ tối</span>
                                </div>
                                <ThemeBtn />
                            </li>
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
