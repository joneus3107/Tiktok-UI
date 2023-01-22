import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from '~/Component/Header/Header.module.scss';
import images from '~/assets/images';
import SearchIco from '~/Component/Header/SearchIco';
import TooltipWrapper from '~/Component/Header/TooltipWrapper';
import HeaderSVG from '~/Component/Header/HeaderSVG';
import HeaderMenu from '~/Layouts/Popper/HeaderMenu';

const cx = classNames.bind(styles);
const testData = [
    {
        avatar: 'https://yt3.googleusercontent.com/ytc/AMLnZu-dve9_9Pny-sISQqtWQeKPTwbmvduMsqR1F9M_dw=s900-c-k-c0x00ffffff-no-rj',
        userName: 'tranthanh123',
        niceName: 'Trấn Thành',
        blueStick: true,
    },
    {
        avatar: 'https://bedental.vn/wp-content/uploads/2022/11/hot-girl_8-683x1024.jpg',
        userName: 'iamleon9999',
        niceName: 'iamlion',
    },
    {
        avatar: 'https://image-us.24h.com.vn/upload/4-2021/images/2021-10-23/anh-1-1634958379-406-width650height813.jpg',
        userName: 'dothuyquynh999',
        niceName: 'Quỳnh Moon 🌙',
    },
];

function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [checkClear, setCheckClear] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (searchInput.length > 0) {
            setCheckClear(true);
            setSearchResult(testData);
        } else {
            setCheckClear(false);
            setSearchResult([]);
        }
    }, [searchInput]);

    const clearRef = useRef();

    const handleChangeSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const resetSearch = () => {
        setSearchInput('');
    };

    return (
        <header className={cx('l-header')}>
            <div className={cx('l-container', 'l-header__inner')}>
                <div className={cx('l-header__logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <div className={cx('l-header__searchArea')}>
                    {/* Search Account Result */}
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(atts) => (
                            <div
                                className={cx('l-header__searchResult')}
                                tabIndex="-1"
                                {...atts}
                            >
                                <TooltipWrapper>
                                    <h4>Tài khoản</h4>
                                    {searchResult.map((account, index) => (
                                        <div
                                            key={index}
                                            className={cx(
                                                'l-header__searchAccount',
                                            )}
                                        >
                                            <div
                                                className={cx(
                                                    'l-header__searchAccountImg',
                                                )}
                                            >
                                                <img
                                                    src={account.avatar}
                                                    alt={account.userName}
                                                />
                                            </div>
                                            <div
                                                className={cx(
                                                    'l-header__searchAccountInfo',
                                                )}
                                            >
                                                <h5>
                                                    {account.userName}
                                                    {account.blueStick && (
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faCheckCircle
                                                                }
                                                            />
                                                        </span>
                                                    )}
                                                </h5>
                                                <p>{account.niceName}</p>
                                            </div>
                                        </div>
                                    ))}
                                </TooltipWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('l-header__searchBar')} id="parent">
                            <input
                                className={cx('l-header__txtInput')}
                                type="text"
                                spellCheck="false"
                                autoComplete="false"
                                value={searchInput}
                                onChange={handleChangeSearch}
                                placeholder="Tìm kiếm tài khoản và video"
                            />
                            <button
                                type="reset"
                                className={cx('l-header__clear', {
                                    'l-header__clear--show': checkClear,
                                })}
                                ref={clearRef}
                                onClick={resetSearch}
                            >
                                <img src={images.clear} alt="clear_ico" />
                            </button>
                            <span className={cx('l-header__border')}></span>

                            <button
                                type="submit"
                                className={cx('l-header__search')}
                            >
                                <SearchIco />
                            </button>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('l-header__navMenu')}>
                    <button className={cx('c-btn01', 'c-btn01--white-bg')}>
                        {/* Plus Icon */}
                        <svg
                            className={'l-header__plusIco'}
                            width="1em"
                            data-e2e=""
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
                            ></path>
                        </svg>
                        Tải lên
                    </button>
                    <button className={cx('c-btn01')}>Đăng nhập</button>
                    <span className={cx('l-header__more')}>
                        <HeaderMenu classNames={cx('l-header__cornerMenu')}>
                            <svg
                                className={cx('l-header__moreIco')}
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
                                    d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"
                                ></path>
                            </svg>
                        </HeaderMenu>
                    </span>
                </div>
            </div>
            <HeaderSVG />
        </header>
    );
}

export default Header;
